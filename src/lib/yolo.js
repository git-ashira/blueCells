import * as ort from 'onnxruntime-web';
import { COCO_CLASSES } from '../data/coco';

export const MODEL_INPUT_SIZE = 640;
const MODEL_COLORS = ['#5eead4', '#f97316', '#f43f5e', '#38bdf8', '#a78bfa', '#fbbf24'];

let wasmConfigured = false;

export function configureWasmRuntime() {
  if (wasmConfigured) {
    return;
  }

  ort.env.wasm.wasmPaths = 'https://cdn.jsdelivr.net/npm/onnxruntime-web/dist/';
  ort.env.wasm.numThreads = 1;
  wasmConfigured = true;
}

export async function createSession(modelUrl) {
  configureWasmRuntime();

  return ort.InferenceSession.create(modelUrl, {
    executionProviders: ['wasm'],
    graphOptimizationLevel: 'all',
  });
}

export async function detectObjects(session, source, inputCanvas, options) {
  const { tensor, scale, padX, padY, sourceWidth, sourceHeight } = await prepareInput(
    source,
    inputCanvas,
    options.modelInputSize,
  );

  const feeds = {};
  feeds[session.inputNames[0]] = tensor;

  const outputs = await session.run(feeds);
  const output = outputs[session.outputNames[0]];
  const rawDetections = decodeOutput(output, options.confidenceThreshold);
  const filtered = nonMaxSuppression(rawDetections, options.iouThreshold);

  return filtered.map((detection) => ({
    ...detection,
    x: clamp((detection.x - padX) / scale, 0, sourceWidth),
    y: clamp((detection.y - padY) / scale, 0, sourceHeight),
    width: clamp(detection.width / scale, 0, sourceWidth),
    height: clamp(detection.height / scale, 0, sourceHeight),
  }));
}

export function resizeOverlay(canvas, video) {
  const rect = video.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  const width = Math.max(1, Math.round(rect.width * ratio));
  const height = Math.max(1, Math.round(rect.height * ratio));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
  }
}

async function prepareInput(source, inputCanvas, targetSize) {
  const sourceWidth = source.videoWidth || source.naturalWidth || source.width;
  const sourceHeight = source.videoHeight || source.naturalHeight || source.height;
  const context = inputCanvas.getContext('2d', { willReadFrequently: true });

  if (!sourceWidth || !sourceHeight || !context) {
    throw new Error('Video is not ready for preprocessing.');
  }

  const scale = Math.min(targetSize / sourceWidth, targetSize / sourceHeight);
  const resizedWidth = Math.round(sourceWidth * scale);
  const resizedHeight = Math.round(sourceHeight * scale);
  const padX = Math.floor((targetSize - resizedWidth) / 2);
  const padY = Math.floor((targetSize - resizedHeight) / 2);

  context.fillStyle = '#111827';
  context.fillRect(0, 0, targetSize, targetSize);
  context.drawImage(source, 0, 0, sourceWidth, sourceHeight, padX, padY, resizedWidth, resizedHeight);

  const imageData = context.getImageData(0, 0, targetSize, targetSize);
  const tensorData = new Float32Array(3 * targetSize * targetSize);

  for (let index = 0; index < imageData.data.length; index += 4) {
    const pixel = index / 4;
    const red = imageData.data[index] / 255;
    const green = imageData.data[index + 1] / 255;
    const blue = imageData.data[index + 2] / 255;

    tensorData[pixel] = red;
    tensorData[pixel + targetSize * targetSize] = green;
    tensorData[pixel + targetSize * targetSize * 2] = blue;
  }

  return {
    tensor: new ort.Tensor('float32', tensorData, [1, 3, targetSize, targetSize]),
    scale,
    padX,
    padY,
    sourceWidth,
    sourceHeight,
  };
}

function decodeOutput(output, confidenceThreshold) {
  const { data, dims } = output;
  const detections = [];
  const classCount = COCO_CLASSES.length;

  let boxesCount = 0;
  let layout = 'channel-first';

  if (dims.length === 3 && dims[1] === 4 + classCount) {
    boxesCount = dims[2];
  } else if (dims.length === 3 && dims[2] === 4 + classCount) {
    boxesCount = dims[1];
    layout = 'box-first';
  } else {
    boxesCount = Math.floor(data.length / (4 + classCount));
  }

  for (let boxIndex = 0; boxIndex < boxesCount; boxIndex += 1) {
    const coords = readDetection(data, boxIndex, boxesCount, layout, classCount);
    const { cx, cy, width, height, score, classIndex } = coords;

    if (score < confidenceThreshold) {
      continue;
    }

    detections.push({
      x: cx - width / 2,
      y: cy - height / 2,
      width,
      height,
      score,
      classIndex,
      label: COCO_CLASSES[classIndex] || `class_${classIndex}`,
      color: MODEL_COLORS[classIndex % MODEL_COLORS.length],
    });
  }

  return detections;
}

function readDetection(data, boxIndex, boxesCount, layout, classCount) {
  let cx;
  let cy;
  let width;
  let height;
  let score = 0;
  let classIndex = 0;

  if (layout === 'box-first') {
    const offset = boxIndex * (4 + classCount);
    cx = data[offset];
    cy = data[offset + 1];
    width = data[offset + 2];
    height = data[offset + 3];

    for (let index = 0; index < classCount; index += 1) {
      const classScore = data[offset + 4 + index];
      if (classScore > score) {
        score = classScore;
        classIndex = index;
      }
    }
  } else {
    cx = data[boxIndex];
    cy = data[boxIndex + boxesCount];
    width = data[boxIndex + boxesCount * 2];
    height = data[boxIndex + boxesCount * 3];

    for (let index = 0; index < classCount; index += 1) {
      const classScore = data[boxIndex + boxesCount * (4 + index)];
      if (classScore > score) {
        score = classScore;
        classIndex = index;
      }
    }
  }

  return { cx, cy, width, height, score, classIndex };
}

function nonMaxSuppression(detections, iouThreshold) {
  const ordered = [...detections].sort((left, right) => right.score - left.score);
  const selected = [];

  while (ordered.length > 0) {
    const candidate = ordered.shift();

    if (!candidate) {
      break;
    }

    selected.push(candidate);

    for (let index = ordered.length - 1; index >= 0; index -= 1) {
      if (intersectionOverUnion(candidate, ordered[index]) > iouThreshold) {
        ordered.splice(index, 1);
      }
    }
  }

  return selected;
}

function intersectionOverUnion(left, right) {
  const leftX1 = left.x;
  const leftY1 = left.y;
  const leftX2 = left.x + left.width;
  const leftY2 = left.y + left.height;
  const rightX1 = right.x;
  const rightY1 = right.y;
  const rightX2 = right.x + right.width;
  const rightY2 = right.y + right.height;

  const intersectionX1 = Math.max(leftX1, rightX1);
  const intersectionY1 = Math.max(leftY1, rightY1);
  const intersectionX2 = Math.min(leftX2, rightX2);
  const intersectionY2 = Math.min(leftY2, rightY2);

  const intersectionWidth = Math.max(0, intersectionX2 - intersectionX1);
  const intersectionHeight = Math.max(0, intersectionY2 - intersectionY1);
  const intersectionArea = intersectionWidth * intersectionHeight;
  const unionArea = left.width * left.height + right.width * right.height - intersectionArea;

  return unionArea <= 0 ? 0 : intersectionArea / unionArea;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}