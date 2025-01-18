import { useContext } from "react";
import GridContext from "../contexts/grid";

interface Props {
  rowIndex: number;
  columnIndex: number;
  value: boolean;
}

const GridCell = ({ rowIndex, columnIndex, value }: Props) => {
  const { toggleDispatch } = useContext(GridContext);
  return (
    <div
      key={columnIndex}
      onClick={() => toggleDispatch(rowIndex, columnIndex)}
      style={{
        border: "1px solid black",
        padding: "30px",
        margin: "2px",
        background: value ? "green" : "grey",
      }}
    ></div>
  );
};

export default GridCell;
