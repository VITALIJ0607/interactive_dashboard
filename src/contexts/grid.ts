import { createContext } from "react";

type GridContextType = {
  onToggleCell: (
    rowIndex: number,
    columnIndex: number,
    newValue: boolean
  ) => void;
};

const GridContext = createContext<GridContextType>({} as GridContextType);

export default GridContext;
