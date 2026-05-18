import { useEffect, useRef, useState } from 'react';
import { MODEL_INPUT_SIZE, createSession, detectObjects, resizeOverlay } from '../lib/yolo';

const MODEL_URL = 'models/yolov8n.onnx';
const CONFIDENCE_THRESHOLD = 0.35;
const IOU_THRESHOLD = 0.45;
const FRAME_INTERVAL_MS = 120;

// Class configuration matching the trained model
// Class IDs must match training order: 0 = live_cell, 1 = dead_cell
const CLASS_CONFIG = {
  0: { label: ' ', color: '#22c55e' },   // green
  1: { label: ' ', color: '#ef4444' },   // red
};
const CLASS_NAMES = ['live_cell', 'dead_cell'];

function formatError(error) {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
}

function classifyDetection(detection) {
  // Prefer numeric classId if provided by the yolo lib
  if (typeof detection.classId === 'number' && CLASS_CONFIG[detection.classId]) {
    return detection.classId;
  }
  // Fallback: match by label name
  const label = (detection.label || '').toLowerCase();
  if (label.includes('live')) return 0;
  if (label.includes('dead')) return 1;
  return -1;
}

export function CameraStage() {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const inputCanvasRef = useRef(null);
  const sessionRef = useRef(null);
  const streamRef = useRef(null);
  const rafRef = useRef(0);
  const processingRef = useRef(false);
  const lastInferenceRef = useRef(0);
  const uploadedUrlRef = useRef('');

  const [status, setStatus] = useState('Loading model and preparing camera.');
  const [modelReady, setModelReady] = useState(false);
  const [cameraReady, setCameraReady] = useState(false);
  const [mode, setMode] = useState('webcam');
  const [uploadedImageUrl, setUploadedImageUrl] = useState('');
  const [imageReady, setImageReady] = useState(false);
  const [inferenceMs, setInferenceMs] = useState(0);
  const [liveCount, setLiveCount] = useState(0);
  const [deadCount, setDeadCount] = useState(0);
  const [error, setError] = useState('');
  const [confidenceThreshold, setConfidenceThreshold] = useState(CONFIDENCE_THRESHOLD);

  const totalCount = liveCount + deadCount;
  const viability = totalCount > 0 ? (liveCount / totalCount) * 100 : 0;

  useEffect(() => {
    let cancelled = false;

    async function initializeSession() {
      try {
        setStatus('Loading trypan blue cell detection model...');
        const session = await createSession(MODEL_URL);

        if (cancelled) return;

        sessionRef.current = session;
        setModelReady(true);
        setStatus('Model ready. Requesting webcam permission...');
      } catch (err) {
        if (!cancelled) {
          setError(formatError(err));
          setStatus('Model loading failed.');
        }
      }
    }

    initializeSession();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function startCamera() {
      if (!modelReady || mode !== 'webcam') return;

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: {
            facingMode: 'environment',
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
          audio: false,
        });

        if (cancelled) {
          stream.getTracks().forEach((track) => track.stop());
          return;
        }

        streamRef.current = stream;
        const video = videoRef.current;

        if (!video) return;

        video.srcObject = stream;
        await video.play();
        setCameraReady(true);
        setImageReady(false);
        setStatus('Camera live. Counting cells in real time.');
      } catch (err) {
        if (!cancelled) {
          setError(formatError(err));
          setStatus('Camera access failed.');
        }
      }
    }

    startCamera();

    return () => {
      cancelled = true;
      const stream = streamRef.current;

      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [modelReady, mode]);

  useEffect(() => {
    if (mode === 'webcam') return;

    if (!cameraReady) {
      setStatus('Upload an image to count cells.');
    }
  }, [mode, cameraReady]);

  // Helper to apply detection results to UI state and canvas
  function applyDetections(detections, source) {
    const canvas = canvasRef.current;
    if (!canvas) return;

    resizeOverlay(canvas, source);

    const context = canvas.getContext('2d');
    if (context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawDetections(context, source, canvas, detections);
    }

    let live = 0;
    let dead = 0;
    for (const det of detections) {
      const cls = classifyDetection(det);
      if (cls === 0) live += 1;
      else if (cls === 1) dead += 1;
    }

    setLiveCount(live);
    setDeadCount(dead);
  }

  useEffect(() => {
    let cancelled = false;

    async function loop(now) {
      if (cancelled) return;

      const video = videoRef.current;
      const image = imageRef.current;
      const canvas = canvasRef.current;
      const inputCanvas = inputCanvasRef.current;
      const session = sessionRef.current;
      const source = mode === 'webcam' ? video : image;
      const sourceReady = mode === 'webcam' ? cameraReady : imageReady;

      if (
        source &&
        canvas &&
        inputCanvas &&
        session &&
        sourceReady &&
        (mode === 'webcam' ? video.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA : true) &&
        !processingRef.current &&
        now - lastInferenceRef.current >= FRAME_INTERVAL_MS
      ) {
        processingRef.current = true;

        try {
          const start = performance.now();
          const detections = await detectObjects(session, source, inputCanvas, {
            confidenceThreshold: confidenceThreshold,
            iouThreshold: IOU_THRESHOLD,
            modelInputSize: MODEL_INPUT_SIZE,
          });

          if (cancelled) return;

          applyDetections(detections, source);

          const elapsed = performance.now() - start;
          setInferenceMs(elapsed);
          setStatus(
            `${mode === 'webcam' ? 'Camera live' : 'Image analyzed'}. ${detections.length} cell${detections.length === 1 ? '' : 's'} detected.`,
          );
          lastInferenceRef.current = now;
        } catch (err) {
          if (!cancelled) {
            setError(formatError(err));
            setStatus('Inference failed.');
          }
        } finally {
          processingRef.current = false;
        }
      }

      rafRef.current = requestAnimationFrame(loop);
    }

    if (mode === 'webcam' && cameraReady) {
      rafRef.current = requestAnimationFrame(loop);
    }

    return () => {
      cancelled = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [cameraReady, imageReady, mode, confidenceThreshold]);

  useEffect(() => {
    return () => {
      if (uploadedUrlRef.current) {
        URL.revokeObjectURL(uploadedUrlRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (mode !== 'upload' || !imageReady || !imageRef.current || !sessionRef.current) {
      return;
    }

    let cancelled = false;

    async function runStillImageDetection() {
      try {
        const canvas = canvasRef.current;
        const inputCanvas = inputCanvasRef.current;
        const source = imageRef.current;
        const session = sessionRef.current;

        if (!canvas || !inputCanvas || !source || !session) return;

        const start = performance.now();
        const detections = await detectObjects(session, source, inputCanvas, {
          confidenceThreshold: confidenceThreshold,
          iouThreshold: IOU_THRESHOLD,
          modelInputSize: MODEL_INPUT_SIZE,
        });

        if (cancelled) return;

        applyDetections(detections, source);

        setInferenceMs(performance.now() - start);
        setStatus(`Image analyzed. ${detections.length} cell${detections.length === 1 ? '' : 's'} detected.`);
      } catch (err) {
        if (!cancelled) {
          setError(formatError(err));
          setStatus('Image inference failed.');
        }
      }
    }

    runStillImageDetection();

    return () => {
      cancelled = true;
    };
  }, [imageReady, mode, confidenceThreshold]);

  function stopCameraStream() {
    const stream = streamRef.current;

    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }

    const video = videoRef.current;
    if (video) {
      video.srcObject = null;
    }

    setCameraReady(false);
  }

  function resetOverlay() {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (canvas && context) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    setLiveCount(0);
    setDeadCount(0);
  }

  function handleModeChange(nextMode) {
    setError('');
    setMode(nextMode);
    setStatus(nextMode === 'webcam' ? 'Loading webcam stream...' : 'Upload an image to count cells.');
    setImageReady(false);
    resetOverlay();

    if (nextMode === 'upload') {
      stopCameraStream();
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    } else {
      if (uploadedUrlRef.current) {
        URL.revokeObjectURL(uploadedUrlRef.current);
        uploadedUrlRef.current = '';
      }
      setUploadedImageUrl('');
    }
  }

  function handleFileSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (uploadedUrlRef.current) {
      URL.revokeObjectURL(uploadedUrlRef.current);
    }

    const objectUrl = URL.createObjectURL(file);
    uploadedUrlRef.current = objectUrl;
    setError('');
    setUploadedImageUrl(objectUrl);
    setMode('upload');
    setStatus(`Loaded ${file.name}. Counting cells...`);
    setImageReady(false);
    stopCameraStream();
    resetOverlay();
  }



  function handleImageLoad(event) {
    const image = event.currentTarget;
    if (mode !== 'upload' || !image.src) return;

    setImageReady(true);
  }

  return (
    <article className="stage-card">
      <div className="stage-status-row">
        <span className={`status-pill ${modelReady && (cameraReady || imageReady) ? 'status-pill--ready' : ''}`}>
          {status}
        </span>
        <span className="status-meta">Trypan Blue Cell Counter · ONNX Runtime Web · YOLOv8</span>
      </div>

      <div className="mode-switcher" role="tablist" aria-label="Input source">
        <button
          type="button"
          className={mode === 'webcam' ? 'mode-switcher__button mode-switcher__button--active' : 'mode-switcher__button'}
          onClick={() => handleModeChange('webcam')}
        >
          Webcam
        </button>
        <label className="upload-button" htmlFor="image-upload">
          Choose image
        </label>
        <input
          id="image-upload"
          className="upload-input"
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
        />
      </div>

      <div className="confidence-control">
        <label htmlFor="confidence-slider">
          Confidence Threshold: {(confidenceThreshold * 100).toFixed(0)}%
        </label>
        <input
          id="confidence-slider"
          type="range"
          min="0.01"
          max="1"
          step="0.01"
          value={confidenceThreshold}
          onChange={(e) => setConfidenceThreshold(parseFloat(e.target.value))}
          className="confidence-slider"
        />
      </div>

      <div className="video-frame">
        <video
          ref={videoRef}
          className={mode === 'webcam' ? 'camera-feed' : 'camera-feed camera-feed--hidden'}
          autoPlay
          playsInline
          muted
        />
        <img
          ref={imageRef}
          className={mode === 'upload' ? 'camera-feed' : 'camera-feed camera-feed--hidden'}
          src={uploadedImageUrl}
          alt="Uploaded preview"
          onLoad={handleImageLoad}
        />
        <canvas ref={canvasRef} className="overlay" />
        <canvas ref={inputCanvasRef} className="input-canvas" width={MODEL_INPUT_SIZE} height={MODEL_INPUT_SIZE} />

        <div className="hud">
          <div>
            <span className="hud-label">Live cells</span>
            <strong style={{ color: CLASS_CONFIG[0].color }}>{liveCount}</strong>
          </div>
          <div>
            <span className="hud-label">Dead cells</span>
            <strong style={{ color: CLASS_CONFIG[1].color }}>{deadCount}</strong>
          </div>
          <div>
            <span className="hud-label">Total</span>
            <strong>{totalCount}</strong>
          </div>
          <div>
            <span className="hud-label">Viability</span>
            <strong>{viability.toFixed(1)}%</strong>
          </div>
          <div>
            <span className="hud-label">Latency</span>
            <strong>{inferenceMs.toFixed(0)} ms</strong>
          </div>
        </div>
      </div>

      
    </article>
  );
}

function drawDetections(context, source, canvas, detections) {
  // Use natural dimensions for images, video dimensions for webcam
  const sourceWidth = source.videoWidth || source.naturalWidth || source.width || 1;
  const sourceHeight = source.videoHeight || source.naturalHeight || source.height || 1;
  const scaleX = canvas.width / sourceWidth;
  const scaleY = canvas.height / sourceHeight;

  context.lineWidth = Math.max(2, Math.round(Math.min(canvas.width, canvas.height) / 320));
  context.font = '600 14px "Space Grotesk", sans-serif';

  for (const detection of detections) {
    const x = detection.x * scaleX;
    const y = detection.y * scaleY;
    const width = detection.width * scaleX;
    const height = detection.height * scaleY;

    // Determine class and color from our config (overrides yolo lib defaults)
    const classId = typeof detection.classId === 'number'
      ? detection.classId
      : (detection.label?.toLowerCase().includes('dead') ? 1 : 0);

    const config = CLASS_CONFIG[classId] || { label: detection.label || 'Cell', color: detection.color || '#94a3b8' };
    const color = config.color;

    context.strokeStyle = color;
    context.strokeRect(x, y, width, height);
  }
}