export type Algorithm = "Dijkstra" | "A-star" | "BFS" | "DFS";

export type MazeType = "NONE" | "Binary-Tree" | "Recursive-Division";

export interface MazeSelectType {
    name: string;
    value: MazeType;
}

export type TileType = {
    row: number;
    col: number;
    isEnd: boolean;
    isWall: boolean;
    isPath: boolean;
    isStart: boolean;
    distance: number;
    isTraversed: boolean;
    parent: TileType | null;
}

export type GridType = TileType[][];

export type SpeedType = 2 | 1 | 0.5;
export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
