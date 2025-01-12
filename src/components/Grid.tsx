interface Props {
  items: boolean[][];
  onToggleCell: (rowIndex: number, columnIndex: number) => void;
}

const Grid = ({ items, onToggleCell }: Props) => {
  return (
    <div>
      {items.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              onClick={() => onToggleCell(rowIndex, columnIndex)}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "2px",
                background: cell ? "green" : "grey",
              }}
            >
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
