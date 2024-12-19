import { useState, useEffect } from "react";
import Grid from "./components/Grid";
import StatusList from "./components/StatusList";

const initialRows = 5;
const initialColumns = 5;

function App() {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);
  const initialGridItems = Array.from({ length: initialRows }).map(() =>
    Array.from({ length: initialColumns }).map(() => false)
  );
  const [gridItems, setGridItems] = useState<boolean[][]>(initialGridItems);
  const [activeCells, setActiveCells] = useState<string[]>([]);

  const updateGridItems = (rows: number, columns: number) => {
    const newGridItems = Array.from({ length: rows }).map((_, rowIndex) =>
      Array.from({ length: columns }).map(
        (_, columnIndex) => gridItems[rowIndex]?.[columnIndex]
      )
    );
    setGridItems(newGridItems);
  };

  const updateActiveCells = () => {
    let newActiveCells = [];
    for (let i = 0; i < gridItems.length; i++) {
      for (let j = 0; j < gridItems[i].length; j++) {
        const cell = gridItems[i][j];
        if (cell) newActiveCells.push(`Zelle(${i + 1},${j + 1})`);
      }
    }
    setActiveCells(newActiveCells);
  };

  useEffect(() => {
    updateGridItems(rows, columns);
  }, [rows, columns]);

  useEffect(() => {
    updateActiveCells();
  }, [gridItems]);

  const addGridRow = () => {
    setRows((prevRows) => prevRows + 1);
  };

  const addGridColumn = () => {
    setColumns((prevColumns) => prevColumns + 1);
  };

  const removeGridRow = () => {
    setRows((prevRows) => Math.max(prevRows - 1, 0));
  };

  const removeGridColumn = () => {
    setColumns((prevColumns) => Math.max(prevColumns - 1, 0));
  };

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    const newGridItems = [...gridItems];
    newGridItems[rowIndex][columnIndex] = !gridItems[rowIndex][columnIndex];
    setGridItems(newGridItems);
  };

  const resetGrid = () => {
    setGridItems(initialGridItems);
    setRows(initialRows);
    setColumns(initialColumns);
  };

  return (
    <div>
      <h1>Interaktives Dashboard für Grid-Visualisierung</h1>
      <div>
        <button onClick={addGridRow}>Zeile hinzufügen</button>
        <button onClick={removeGridRow} disabled={rows === 1}>
          Zeile entfernen
        </button>
        <button onClick={addGridColumn}>Spalte hinzufügen</button>
        <button onClick={removeGridColumn} disabled={columns === 1}>
          Spalte entfernen
        </button>
        <button onClick={resetGrid}>Zurücksetzen</button>
      </div>
      <Grid items={gridItems} toggleCell={toggleCell}></Grid>
      <StatusList activeCells={activeCells}></StatusList>
    </div>
  );
}

export default App;
