interface GridState {
  rows: number;
  columns: number;
  activeCells: Set<string>;
}

interface GridButtonAction {
  type: "ADD ROW" | "DELETE ROW" | "ADD COLUMN" | "DELETE COLUMN" | "RESET";
}

interface ToggleAction {
  type: "TOGGLE";
  data: {
    rowIndex: number;
    columnIndex: number;
  };
}

type GridAction = GridButtonAction | ToggleAction;

export const initialState: GridState = {
  rows: 5,
  columns: 5,
  activeCells: new Set<string>(),
};

const gridReducer = (state: GridState, action: GridAction): GridState => {
  const onDerement = (newRows: number, newColumns: number): Set<string> => {
    const updatedCells = new Set<string>();
    for (const cell of state.activeCells) {
      const [rowIndex, columnIndex] = cell.split(",").map(Number);
      if (rowIndex < newRows && columnIndex < newColumns) {
        updatedCells.add(cell);
      }
    }
    return updatedCells;
  };

  switch (action.type) {
    case "ADD ROW":
      return { ...state, rows: state.rows + 1 };
    case "DELETE ROW":
      const newRows = state.rows - 1;
      return {
        ...state,
        rows: newRows,
        activeCells: onDerement(newRows, state.columns),
      };
    case "ADD COLUMN":
      return { ...state, columns: state.columns + 1 };
    case "DELETE COLUMN":
      const newColumns = state.columns - 1;
      return {
        ...state,
        columns: state.columns - 1,
        activeCells: onDerement(state.rows, newColumns),
      };
    case "RESET":
      return initialState;
    case "TOGGLE":
      const cell = `${action.data.rowIndex},${action.data.columnIndex}`;
      const updatedCells = new Set<string>(state.activeCells);
      if (state.activeCells.has(cell)) {
        updatedCells.delete(cell);
        return { ...state, activeCells: updatedCells };
      } else {
        return { ...state, activeCells: updatedCells.add(cell) };
      }
    default:
      return state;
  }
};

export default gridReducer;
