const initialState = {
  grid: [],
};

export default function grid(state = initialState, action) {
  switch (action.type) {
    case 'INITIALIZE_GRID': {
      const rows = 20
      const columns = 20
      const grid = []

      for (var y = 0; y < rows; y++) {
        let row = []
        for (var x = 0; x < columns; x++) {
          row.push(0)
        }

        grid.push(row)
      }

      return {grid: grid}
    }

    default:
      return state
  }
}
