const initialState = {
  rows: 80,
  columns: 160,
  grid: [],
};

export default function grid(state = initialState, action) {
  switch (action.type) {
    case 'INITIALIZE_GRID': {
      const rows = state.rows
      const columns = state.columns
      const grid = []

      for (var y = 0; y < rows; y++) {
        let row = []
        for (var x = 0; x < columns; x++) {
          row.push(getRandomInt(0,1))
        }

        grid.push(row)
      }

      return {...state, grid: grid}
    }

    case 'NEXT_GRID_STATE': {
      // var t0 = performance.now();

      let newGrid = []

      for (let rowIndex = 0; rowIndex < state.grid.length; rowIndex++) {
        let newRow = []
        for (let colIndex = 0; colIndex < state.grid[rowIndex].length; colIndex++) {
          newRow[colIndex] = shouldLive(colIndex, rowIndex, state)
        }

        newGrid[rowIndex] = newRow
      }
      // var t1 = performance.now();
      // console.log('Took', (t1 - t0).toFixed(4), 'milliseconds to generate new state');

      return {...state, grid: newGrid}
    }

    default:
      return state
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shouldLive(x, y, state) {
  let neightbours = 0
  const currentCell = state.grid[y][x]
  // Check upper neightbords
  let upperRow = y - 1
  let aboveRow = y + 1
  let leftPos = x - 1
  let rightPos = x + 1
  if (y === 0) {
    upperRow = state.rows - 1
  }
  if (y === (state.rows - 1)) {
    aboveRow = 0
  }
  if (x === 0) {
    leftPos = state.columns - 1
    rightPos = x + 1
  }
  if (x === (state.columns - 1)) {
    leftPos = x - 1
    rightPos = 0
  }

  if (state.grid[upperRow][leftPos]) {
    neightbours++
  }
  if (state.grid[upperRow][x]) {
    neightbours++
  }
  if (state.grid[upperRow][rightPos]) {
    neightbours++
  }
  if (state.grid[y][leftPos]) {
    neightbours++
  }
  if (state.grid[y][rightPos]) {
    neightbours++
  }
  if (state.grid[aboveRow][leftPos]) {
    neightbours++
  }
  if (state.grid[aboveRow][x]) {
    neightbours++
  }
  if (state.grid[aboveRow][rightPos]) {
    neightbours++
  }

  // Is the cell alive
  if (currentCell) {
    // Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    if (neightbours < 2) {
      return 0
    }

    // Any live cell with two or three live neighbours lives on to the next generation.
    if (neightbours === 2 || neightbours === 3) {
      return 1
    }

    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (neightbours > 3) {
      return 0
    }
  // Is the cell dead
  } else {
    // Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
    if (neightbours === 3) {
      return 1
    }
  }


  return 0
}
