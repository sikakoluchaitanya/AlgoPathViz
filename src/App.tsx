import { PathfindProvider } from "./context/PathfindContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import { Grid } from "./components/Grid";
import { useRef } from "react";

function App() {
  const isVisulizerRunningRef = useRef(false); 
  return (
    <PathfindProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900">
            <Grid isVisulizerRunningRef={isVisulizerRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindProvider>
  )
}

export default App
