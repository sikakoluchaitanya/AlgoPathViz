import { GridType, TileType, MazeType, SpeedType } from "./types";
import { binaryTree} from "../lib/Algorithm/Maze/binaryTree";

export const runMazeAlgo = async({
    maze,
    grid,
    startTile,
    endTile,
    setIsDisabled,
    speed
}: {
    maze: MazeType;
    grid: GridType;
    startTile: TileType;
    endTile: TileType;
    setIsDisabled: (isDisabled: boolean) => void;
    speed: SpeedType;
}) => {
    if(maze == 'Binary-Tree') {
        await binaryTree(grid, startTile, endTile, setIsDisabled, speed= 1);
    }
}