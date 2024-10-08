import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export const useSpeedContext = () => {
    const context = useContext(SpeedContext);
    if (!context) {
        throw new Error("useSpeedContext must be used within a SpeedProvider");
    }
    return context;
}


