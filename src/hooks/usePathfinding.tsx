import { useContext } from "react";
import { PathfindContext } from "../context/PathfindContext";

export const usePathfinding = () => {
    const context = useContext(PathfindContext);
    if (!context) {
        throw new Error("usePathfinding must be used within a PathfindProvider");
    }
    
    return context;
}

