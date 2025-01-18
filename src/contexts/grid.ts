import { createContext } from "react";

type GridContextType = {
  toggleDispatch: (rowIndex: number, columnIndex: number) => void;
};

const GridContext = createContext<GridContextType>({} as GridContextType);

export default GridContext;
