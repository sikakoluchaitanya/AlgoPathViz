import { PathfindingProvider } from "./context/PathfindContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import { Grid } from "./components/Grid";
import { Nav } from "./components/Navbar";
import { useRef } from "react";

function App() {
  const isVisualizationRunningRef = useRef(false); 
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900">
            <Nav isVisualizationRunningRef={isVisualizationRunningRef} />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  )
}

export default App
