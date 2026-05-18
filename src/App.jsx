import { CameraStage } from './components/CameraStage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1><span style={{ color: "#090446", textShadow:"0 0 3px #ffffff, 0 0 5px #0000ff" }}>B</span>lue cells</h1>
          <p className="lede">Blue cells is a automatic cell counter. This website uses on-device YOLOv8 inference to count cells.</p>
        </div>

        <div className="stage-center">
          <CameraStage />
        </div>
      </section>
      <section>
        <div className="stage-footer">
        <p>
          This web tool uses a YOLO-based object detection model to identify and count live and dead cells in trypan blue-stained images. The model runs directly in your browser using browser-side inferencing, so uploaded or captured images are not sent away for model training purposes.
          <br />
          Users can upload an image using the Choose Picture button or use the webcam feature to capture an image directly, including from a phone camera. Detected cells are highlighted with bounding boxes: live cells are shown in green boxes, and dead cells are shown in red boxes.
          <br />
          A confidence score slider is provided at the top of the page to adjust the detection threshold. Lowering the confidence score may help count cells with lower detection confidence, while increasing it can reduce false detections. This makes the tool useful for images with different lighting, focus, staining intensity, or cell density.
          <br />
          The current model is designed to count individual live and dead cells and may not accurately separate cells in aggregates or highly overlapping clusters. For best results, use clear, well-focused images where cells are evenly distributed and not heavily clumped.
          <br />
          This tool provides a fast, automated estimate of live and dead cell counts from trypan blue-stained samples while keeping image processing local to the browser.
        </p>
      </div>
      </section>
      <footer className="app-footer">
        <div className="footer-content">
          <p>2026 Blue Cells. Built with Pytorch, React, ONNX Runtime and YOLOv8.</p>
          <div className="social-links">
            <a href="https://github.com/git-ashira" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amandeep-singh-hira-5a0bb1191" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;