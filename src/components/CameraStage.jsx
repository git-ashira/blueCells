import { useEffect, useRef, useState } from 'react';
import { MODEL_INPUT_SIZE, createSession, detectObjects, resizeOverlay } from '../lib/yolo';

const MODEL_URL = '/models/yolov8n.onnx';
const CONFIDENCE_THRESHOLD = 0.35;
const IOU_THRESHOLD = 0.45;
const FRAME_INTERVAL_MS = 120;

function formatError(error) {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
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
  const [objectCount, setObjectCount] = useState(0);
  const [liveCount, setLiveCount] = useState(0);
  const [deadCount, setDeadCount] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelled = false;

    async function initializeSession() {
      try {
        setStatus('Loading YOLOv8 model into WebAssembly runtime...');
        const session = await createSession(MODEL_URL);

        if (cancelled) {
          return;
        }

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
      if (!modelReady || mode !== 'webcam') {
        return;
      }

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

        if (!video) {
          return;
        }

        video.srcObject = stream;
        await video.play();
        setCameraReady(true);
        setImageReady(false);
        setStatus('Camera live. Detecting objects in real time.');
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
    if (mode === 'webcam') {
      return;
    }

    if (!cameraReady) {
      setStatus('Upload an image to run detection.');
    }
  }, [mode, cameraReady]);

  useEffect(() => {
    let cancelled = false;

    async function loop(now) {
      if (cancelled) {
        return;
      }

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
            confidenceThreshold: CONFIDENCE_THRESHOLD,
            iouThreshold: IOU_THRESHOLD,
            modelInputSize: MODEL_INPUT_SIZE,
          });

          if (cancelled) {
            return;
          }

          resizeOverlay(canvas, source);

          const context = canvas.getContext('2d');
          if (context) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            drawDetections(context, source, canvas, detections);
          }

          const elapsed = performance.now() - start;
          setInferenceMs(elapsed);
          setObjectCount(detections.length);
          // categorize as live/dead based on label heuristics
          const lcount = detections.filter((d) => /live|viable|alive|unstained|unstained cell/i.test(d.label)).length;
          const dcount = detections.filter((d) => /dead|nonviable|trypan|stained|blue|stained cell/i.test(d.label)).length;
          setLiveCount(lcount);
          setDeadCount(dcount);
          setStatus(
            `${mode === 'webcam' ? 'Camera live' : 'Image analyzed'}. ${detections.length} object${detections.length === 1 ? '' : 's'} detected.`,
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
  }, [cameraReady, imageReady, mode]);

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

        if (!canvas || !inputCanvas || !source || !session) {
          return;
        }

        const start = performance.now();
        const detections = await detectObjects(session, source, inputCanvas, {
          confidenceThreshold: CONFIDENCE_THRESHOLD,
          iouThreshold: IOU_THRESHOLD,
          modelInputSize: MODEL_INPUT_SIZE,
        });

        if (cancelled) {
          return;
        }

        resizeOverlay(canvas, source);

        const context = canvas.getContext('2d');
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          drawDetections(context, source, canvas, detections);
        }

        setInferenceMs(performance.now() - start);
        setObjectCount(detections.length);
        const lcount = detections.filter((d) => /live|viable|alive|unstained|unstained cell/i.test(d.label)).length;
        const dcount = detections.filter((d) => /dead|nonviable|trypan|stained|blue|stained cell/i.test(d.label)).length;
        setLiveCount(lcount);
        setDeadCount(dcount);
        setStatus(`Image analyzed. ${detections.length} object${detections.length === 1 ? '' : 's'} detected.`);
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
  }, [imageReady, mode]);

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
    setObjectCount(0);
  }

  function handleModeChange(nextMode) {
    setError('');
    setMode(nextMode);
    setStatus(nextMode === 'webcam' ? 'Loading webcam stream...' : 'Upload an image to run detection.');
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
    if (!file) {
      return;
    }

    if (uploadedUrlRef.current) {
      URL.revokeObjectURL(uploadedUrlRef.current);
    }

    const objectUrl = URL.createObjectURL(file);
    uploadedUrlRef.current = objectUrl;
    setError('');
    setUploadedImageUrl(objectUrl);
    setMode('upload');
    setStatus(`Loaded ${file.name}. Running detection...`);
    setImageReady(false);
    stopCameraStream();
    resetOverlay();
  }

  function handleImageLoad(event) {
    const image = event.currentTarget;
    if (mode !== 'upload' || !image.src) {
      return;
    }

    setImageReady(true);
  }

  return (
    <article className="stage-card">
      <div className="stage-status-row">
        <span className={`status-pill ${modelReady && (cameraReady || imageReady) ? 'status-pill--ready' : ''}`}>
          {status}
        </span>
        <span className="status-meta">ONNX Runtime Web · WASM · YOLOv8n</span>
      </div>

      <div className="mode-switcher" role="tablist" aria-label="Input source">
        <button
          type="button"
          className={mode === 'webcam' ? 'mode-switcher__button mode-switcher__button--active' : 'mode-switcher__button'}
          onClick={() => handleModeChange('webcam')}
        >
          Webcam
        </button>
        <button
          type="button"
          className={mode === 'upload' ? 'mode-switcher__button mode-switcher__button--active' : 'mode-switcher__button'}
          onClick={() => handleModeChange('upload')}
        >
          Upload picture
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
            <strong>{liveCount}</strong>
          </div>
          <div>
            <span className="hud-label">Dead cells</span>
            <strong>{deadCount}</strong>
          </div>
          <div>
            <span className="hud-label">Latency</span>
            <strong>{inferenceMs.toFixed(0)} ms</strong>
          </div>
        </div>
      </div>

      <div className="stage-footer">
        <p>
          Browser-side inference keeps the camera stream local. The model is preprocessed to a
          {` ${MODEL_INPUT_SIZE}x${MODEL_INPUT_SIZE} `}
          tensor, then decoded and drawn back onto the live video.
        </p>
        <p>Switch to upload mode when you want to test a single photo without opening the camera.</p>
        {error ? <p className="error-copy">{error}</p> : null}
      </div>
    </article>
  );
}

function drawDetections(context, video, canvas, detections) {
  const videoWidth = video.videoWidth || 1;
  const videoHeight = video.videoHeight || 1;
  const scaleX = canvas.width / videoWidth;
  const scaleY = canvas.height / videoHeight;

  context.lineWidth = Math.max(2, Math.round(Math.min(canvas.width, canvas.height) / 320));
  context.font = '600 14px "Space Grotesk", sans-serif';

  for (const detection of detections) {
    const x = detection.x * scaleX;
    const y = detection.y * scaleY;
    const width = detection.width * scaleX;
    const height = detection.height * scaleY;

    context.strokeStyle = detection.color;
    context.fillStyle = detection.color;
    context.strokeRect(x, y, width, height);

    const label = `${detection.label} ${(detection.score * 100).toFixed(0)}%`;
    const labelWidth = context.measureText(label).width + 16;
    const labelHeight = 26;
    const labelY = Math.max(0, y - labelHeight - 4);

    context.fillStyle = detection.color;
    context.fillRect(x, labelY, labelWidth, labelHeight);
    context.fillStyle = '#06111d';
    context.fillText(label, x + 8, labelY + 17);
  }
}