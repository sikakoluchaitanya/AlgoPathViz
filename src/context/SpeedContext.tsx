import { SpeedType } from "../utils/types";
import { createContext, useState, ReactNode } from "react";

interface SpeedContextType {
    speed: SpeedType;
    setSpeed: (speed: SpeedType) => void;
}

export const SpeedContext = createContext<SpeedContextType | undefined>(undefined);

export const SpeedProvider = ({ children }: { children: ReactNode }) => {
    const [speed, setSpeed] = useState<SpeedType>("0.5");

    return (
        <SpeedContext.Provider value={{ speed, setSpeed }}>
            {children}
        </SpeedContext.Provider>
    );
}

