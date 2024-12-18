import { useState, useEffect, MouseEventHandler } from "react";
import Grid from "./components/Grid";

function App() {
  const [rows, setRows] = useState(5);
  const [columns, setColumns] = useState(5);
  const [gridItems, setGridItems] = useState<boolean[][]>([]);

  const updateGridItems = (rows: number, columns: number) => {
    const newGridItems = Array.from({ length: rows }).map(() =>
      Array.from({ length: columns }).map(() => false)
    );
    setGridItems(newGridItems);
  };

  useEffect(() => {
    updateGridItems(rows, columns);
    console.log(gridItems);
  }, [rows, columns]);

  const AddGridRow = () => {
    setRows((prevRows) => prevRows + 1);
  };

  const AddGridColumn = () => {
    setColumns((prevColumns) => prevColumns + 1);
  };

  const RemoveGridRow = () => {
    setRows((prevRows) => Math.max(prevRows - 1, 0));
  };

  const RemoveGridColumn = () => {
    setColumns((prevColumns) => Math.max(prevColumns - 1, 0));
  };

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    const newGridItems = [ ...gridItems];
    newGridItems[rowIndex][columnIndex] = !gridItems[rowIndex][columnIndex];
    setGridItems(newGridItems);
  };

  return (
    <div>
      <h1>Interaktives Dashboard für Grid-Visualisierung</h1>
      <div>
        <button onClick={AddGridRow}>Zeile hinzufügen</button>
        <button onClick={RemoveGridRow} disabled={rows === 1}>
          Zeile entfernen
        </button>
        <button onClick={AddGridColumn}>Spalte hinzufügen</button>
        <button onClick={RemoveGridColumn} disabled={columns === 1}>
          Spalte entfernen
        </button>
      </div>
      <Grid items={gridItems} toggleCell={toggleCell}></Grid>
    </div>
  );
}

export default App;
