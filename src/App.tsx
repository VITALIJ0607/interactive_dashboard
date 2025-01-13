import { useState } from "react";
import Grid from "./components/Grid";
import StatusList from "./components/StatusList";
import ButtonGroup from "./components/ButtonGroup";

const INITIAL_ROWS = 5;
const INITIAL_COLUMNS = 5;

function App() {
  const [rows, setRows] = useState(INITIAL_ROWS);
  const [columns, setColumns] = useState(INITIAL_COLUMNS);
  const [activeCells, setActiveCells] = useState(new Set<string>());

  const toggleCell = (rowIndex: number, columnIndex: number) => {
    const cellKey = `${rowIndex},${columnIndex}`;
    setActiveCells((prev: Set<string>) => {
      const updated = new Set(prev);
      if (updated.has(cellKey)) {
        updated.delete(cellKey);
      } else {
        updated.add(cellKey);
      }
      return updated;
    });
  };

  const resetGrid = () => {
    setRows(INITIAL_ROWS);
    setColumns(INITIAL_COLUMNS);
    setActiveCells(new Set<string>());
  };

  const modifyRowCount = (delta: number) => {
    setRows((prevRows) => {
      const newRows = Math.max(prevRows + delta, 1);
      updateActiveCellsForGridSize(newRows, columns); // Update activeCells
      return newRows;
    });
  };

  const modifyColumnCount = (delta: number) => {
    setColumns((prevColumns) => {
      const newColumns = Math.max(prevColumns + delta, 1);
      updateActiveCellsForGridSize(rows, newColumns); // Update activeCells
      return newColumns;
    });
  };

  const updateActiveCellsForGridSize = (
    newRows: number,
    newColumns: number
  ) => {
    setActiveCells((prev: Set<string>) => {
      const updated = new Set<string>();
      for (const cell of prev) {
        const [rowIndex, columnIndex] = cell.split(",").map(Number);
        if (rowIndex < newRows && columnIndex < newColumns) {
          updated.add(cell);
        }
      }
      return updated;
    });
  };

  const sortActiveCells = () => {
    return Array.from(activeCells).sort((current: string, next: string) => {
      const [currentX, currentY] = current.split(",");
      const [nextX, nextY] = next.split(",");
      if (currentX > nextX) return 1;
      if (currentX === nextX) return currentY > nextY ? 1 : -1;
      return -1;
    });
  };

  const sortedActiveCells: string[] = sortActiveCells();

  return (
    <div>
      <h1>Interaktives Dashboard für Grid-Visualisierung</h1>
      <ButtonGroup>
        <button onClick={() => modifyRowCount(1)}>Zeile hinzufügen</button>
        <button onClick={() => modifyRowCount(-1)} disabled={rows === 1}>
          Zeile entfernen
        </button>
        <button onClick={() => modifyColumnCount(1)}>Spalte hinzufügen</button>
        <button onClick={() => modifyColumnCount(-1)} disabled={columns === 1}>
          Spalte entfernen
        </button>
        <button onClick={resetGrid}>Zurücksetzen</button>
      </ButtonGroup>
      <div style={{ marginTop: "10px", display: "flex", gap: "300px" }}>
        <Grid
          rows={rows}
          columns={columns}
          activeCells={activeCells}
          onToggleCell={toggleCell}
        />
        <StatusList activeCells={sortedActiveCells} />
      </div>
    </div>
  );
}

export default App;
