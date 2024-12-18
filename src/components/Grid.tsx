interface Props {
  items: boolean[][];
  toggleCell: (rowIndex: number, columnIndex: number) => void;
}

const Grid = ({ items, toggleCell}: Props) => {
  return (
    <div>
      {items.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, columnIndex) => (
            <div
              key={columnIndex}
              onClick={() => toggleCell(rowIndex, columnIndex)}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "2px",
                background: cell ? "green" : "grey"
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
