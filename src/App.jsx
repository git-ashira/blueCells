import { CameraStage } from './components/CameraStage';

function App() {
  return (
    <main className="app-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <h1>Cell counter using YOLO model</h1>
          <p className="lede">This website uses on-device inference to count cells using trypan blue staining and a hemocytometer.</p>
        </div>

        <div className="stage-center">
          <CameraStage />
        </div>
      </section>
    </main>
  );
}

export default App;