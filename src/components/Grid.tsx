import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS, MAX_COLS } from "../utils/constants";
import { Tile } from "./Tile";
import { MutableRefObject } from "react";
import { checkIfStartOrEnd } from "../utils/helpers";
import { createNewGrid } from "../utils/helpers";
import { useState } from "react";

export function Grid({ isVisulizerRunningRef }: { isVisulizerRunningRef: MutableRefObject<boolean> }) {
    const { grid, setGrid } = usePathfinding();
    const [isMouseDown, setIsMouseDown] = useState(false);

    const handleMouseDown = (row:number, col:number) => {
        if(isVisulizerRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }

        setIsMouseDown(true);
        const newGrid = createNewGrid(grid, row, col);
        setGrid(newGrid);
    };

    const handleMouseUp = (row:number, col:number) => {
        if(isVisulizerRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        setIsMouseDown(false);
    };

    const handleMouseEnter = (row:number, col:number) => {
        if(isVisulizerRunningRef.current || checkIfStartOrEnd(row, col)) {
            return;
        }
        if(isMouseDown) {
            const newGrid = createNewGrid(grid, row, col);
            setGrid(newGrid);
        }
    };

    return(
        <div
            className={twMerge(
                // base class
                "flex items-center flex-col justify-center border-sky-300 mt-3",
                // control grid height
                `lg:min-h-[${MAX_ROWS * 17}px] md:min-h-[${MAX_ROWS * 15}px] xs:min-h-[${MAX_ROWS * 8}px] min-h-[${MAX_ROWS * 7}px]`,
                // control grid width
                `lg:w-[${MAX_COLS * 17}px] md:w-[${MAX_COLS * 15}px] xs:w-[${MAX_COLS * 8}px] w-[${MAX_COLS * 7}px]`
            )}
        >
            {grid.map((r, rowIndex) => (
                <div key={rowIndex} className="flex">
                    {r.map((tile, tileIndex) => {
                        const { row, col,  isEnd, isStart, isWall , isPath, isTraversed} = tile;
                        return(
                            <Tile
                            key={tileIndex}
                            row={tile.row}
                            col={tile.col}
                            isEnd={isEnd}
                            isStart={isStart}
                            isPath={isPath}
                            isTraversed={isTraversed}
                            isWall={isWall}
                            handleMouseDown={() => handleMouseDown(row, col)}
                            handleMouseUp={() => handleMouseUp(row, col)}
                            handleMouseEnter={() => handleMouseEnter(row, col)}
                        />
                        );
                    })}
                </div>
            ))}
        </div>
    )
}
