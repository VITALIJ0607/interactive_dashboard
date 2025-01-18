import { useReducer, useState } from "react";
import Grid from "./components/Grid";
import StatusList from "./components/StatusList";
import ButtonGroup from "./components/ButtonGroup";
import gridReducer, { initialState } from "./reducers/gridReducer";
import GridContext from "./contexts/grid";

function App() {
  const [state, dispatch] = useReducer(gridReducer, initialState);

  return (
    <div>
      <h1>Interaktives Dashboard für Grid-Visualisierung</h1>
      <ButtonGroup>
        <button onClick={() => dispatch({ type: "ADD ROW" })}>
          Zeile hinzufügen
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE ROW" })}
          disabled={state.rows === 1}
        >
          Zeile entfernen
        </button>
        <button onClick={() => dispatch({ type: "ADD COLUMN" })}>
          Spalte hinzufügen
        </button>
        <button
          onClick={() => dispatch({ type: "DELETE COLUMN" })}
          disabled={state.columns === 1}
        >
          Spalte entfernen
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>
          Zurücksetzen
        </button>
      </ButtonGroup>
      <div style={{ marginTop: "10px", display: "flex", gap: "300px" }}>
        <GridContext.Provider
          value={{
            toggleDispatch: (rowIndex: number, columnIndex: number) =>
              dispatch({ type: "TOGGLE", data: { rowIndex, columnIndex } }),
          }}
        >
          <Grid
            rows={state.rows}
            columns={state.columns}
            activeCells={state.activeCells}
          />
        </GridContext.Provider>
        <StatusList activeCells={state.activeCells} />
      </div>
    </div>
  );
}

export default App;
