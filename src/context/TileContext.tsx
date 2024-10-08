import { TileType } from "../utils/types";
import { createContext, useState, ReactNode } from "react";
import { START_TILE_CONFIG, END_TILE_CONFIG } from "../utils/constants";

interface TileContextType {
    startTile: TileType;
    setStartTile: (startTile: TileType) => void;
    endTile: TileType;
    setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextType | undefined>(undefined);

export const TileProvider = ({ children }: { children: ReactNode }) => {
    const [startTile, setStartTile] = useState<TileType>(START_TILE_CONFIG);
    const [endTile, setEndTile] = useState<TileType>(END_TILE_CONFIG);

    return (
        <TileContext.Provider 
        value={{ startTile, setStartTile, endTile, setEndTile }}>
            {children}
        </TileContext.Provider>
    );
}
