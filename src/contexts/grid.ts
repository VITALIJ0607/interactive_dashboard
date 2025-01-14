import { createContext } from "react";

const GridContext = createContext<{
  onToggleCell: (
    rowIndex: number,
    columnIndex: number,
    newValue: boolean
  ) => void;
}>({
  onToggleCell: () => {},
});

export default GridContext;
