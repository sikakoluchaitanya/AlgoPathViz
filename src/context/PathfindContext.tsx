import { ReactNode, createContext, useState } from "react";
import { Algorithm, GridType, MazeType } from "../utils/types";
import { START_TILE_CONFIG, END_TILE_CONFIG } from "../utils/constants";
import { createGrid } from "../utils/helpers";
interface PathfindContextType {
    algorithm: Algorithm;
    setAlgorithm: (algorithm: Algorithm) => void;
    maze: MazeType;
    setMaze: (maze: MazeType) => void;
    grid: GridType;
    setGrid: (grid: GridType) => void;
    isGridGenerated: boolean;
    setIsGridGenerated: (isGridGenerated: boolean) => void;
}

export const PathfindContext = createContext<PathfindContextType | undefined>(undefined);

export const PathfindProvider = ({ children }: { children: ReactNode }) => {
    const [algorithm, setAlgorithm] = useState<Algorithm>("BFS");
    const [maze, setMaze] = useState<MazeType>("NONE");
    const [grid, setGrid] = useState<GridType>(createGrid(START_TILE_CONFIG, END_TILE_CONFIG));
    const [isGridGenerated, setIsGridGenerated] = useState<boolean>(false);

    return (
        <PathfindContext.Provider 
        value={{ 
            algorithm, 
            setAlgorithm,
            maze, 
            setMaze, 
            grid, 
            setGrid, 
            isGridGenerated, 
            setIsGridGenerated 
            }}>
            {children}
        </PathfindContext.Provider>
    )
}

