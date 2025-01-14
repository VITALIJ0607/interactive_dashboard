import GridRow from "./GridRow";
import GridContext from "../contexts/grid";

interface Props {
  rows: number;
  columns: number;
  activeCells: Set<string>;
  onToggleCell: (
    rowIndex: number,
    columnIndex: number,
    newValue: boolean
  ) => void;
}

const Grid = ({ rows, columns, activeCells, onToggleCell }: Props) => {
  const generateGridItems = () => {
    return Array.from({ length: rows }, (_, rowIndex) =>
      Array.from({ length: columns }, (_, columnIndex) =>
        activeCells.has(`${rowIndex},${columnIndex}`)
      )
    );
  };

  const gridItems: boolean[][] = generateGridItems();
  return (
    <div>
      <GridContext.Provider value={{ onToggleCell }}>
        {gridItems.map((rowItems, rowIndex) => (
          <GridRow key={rowIndex} rowIndex={rowIndex} rowItems={rowItems} />
        ))}
      </GridContext.Provider>
    </div>
  );
};

export default Grid;
