import { PathfindProvider } from "./context/PathfindContext";
import { TileProvider } from "./context/TileContext";
import { SpeedProvider } from "./context/SpeedContext";
import { Grid } from "./components/Grid";
import { Navbar } from "./components/Navbar";
import { useRef } from "react";

function App() {
  const isVisulizerRunningRef = useRef(false); 
  return (
    <PathfindProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="h-screen w-screen flex flex-col items-center justify-center bg-slate-900">
            <Navbar />
            <Grid isVisulizerRunningRef={isVisulizerRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathfindProvider>
  )
}

export default App
