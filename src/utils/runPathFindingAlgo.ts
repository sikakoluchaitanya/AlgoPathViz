import { aStar } from "../lib/Algorithm/pathfinding/aStar";
import { bfs } from "../lib/Algorithm/pathfinding/bfs";
import { dfs } from "../lib/Algorithm/pathfinding/dfs";
import { dijkstra } from "../lib/Algorithm/pathfinding/dijkstra";
import { Algorithm, GridType, TileType } from "./types";

export const runPathfindingAlgorithm = ({
  algorithm,
  grid,
  startTile,
  endTile,
}: {
  algorithm: Algorithm;
  grid: GridType;
  startTile: TileType;
  endTile: TileType;
}) => {
  switch (algorithm) {
    case "BFS":
      return bfs(grid, startTile, endTile);
    case "DFS":
      return dfs(grid, startTile, endTile);
    case "Dijkstra":
      return dijkstra(grid, startTile, endTile);
    case "A-star":
      return aStar(grid, startTile, endTile);
    default:
      return bfs(grid, startTile, endTile);
  }
};