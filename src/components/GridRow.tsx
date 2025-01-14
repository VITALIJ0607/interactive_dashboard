import GridCell from "./GridCell";

interface Props {
  rowIndex: number;
  rowItems: boolean[];
}

const GridRow = ({ rowIndex, rowItems }: Props) => {
  return (
    <div style={{ display: "flex" }}>
      {rowItems.map((value: boolean, columnIndex: number) => (
        <GridCell
          key={columnIndex}
          rowIndex={rowIndex}
          columnIndex={columnIndex}
          value={value}
        />
      ))}
    </div>
  );
};

export default GridRow;
