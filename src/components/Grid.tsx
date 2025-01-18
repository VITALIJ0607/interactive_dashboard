import GridRow from "./GridRow";

interface Props {
  rows: number;
  columns: number;
  activeCells: Set<string>;
}

const Grid = ({ rows, columns, activeCells }: Props) => {
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
      {gridItems.map((rowItems, rowIndex) => (
        <GridRow key={rowIndex} rowIndex={rowIndex} rowItems={rowItems} />
      ))}
    </div>
  );
};

export default Grid;
