import { createContext } from "react";

const GridContext = createContext<{
  onToggleCell: (rowIndex: number, columnIndex: number) => void;
}>({
  onToggleCell: () => {},
});

export default GridContext;
