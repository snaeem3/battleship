import { ship } from './ship';

export const gameboard = function (gridSize = 12) {
  const board = [];

  // Create board of empty objects
  for (let i = 0; i < gridSize; i++) {
    board.push([]);
    for (let j = 0; j < gridSize; j++) {
      board[i].push({
        hitStatus: null,
        containsShip: false,
        shipIndex: null,
      });
    }
  }

  const ships = [];

  const insertShip = (coordinates) => {
    coordinates.forEach((coordinate) => {
      // Check if any coordinates are outside the board
      if (coordinate[0] >= gridSize || coordinate[1] >= gridSize) {
        throw new Error(
          `[${coordinate[0]},${coordinate[1]}] is outside of grid size ${gridSize}`
        );
      }

      // Check if any coordinates have a ship in them already
      if (board[coordinate[0]][coordinate[1]].containsShip) {
        // console.log(board);
        // console.log(`coordinate: ${coordinate}`);
        throw new Error(
          `[${coordinate[0]},${coordinate[1]}] is already occupied`
        );
      }
    });

    // Add ship to ships array
    ships.push(ship(coordinates.length));

    // Update contains ship status and index in ships array
    coordinates.forEach((coordinate) => {
      board[coordinate[0]][coordinate[1]].containsShip = true;
      board[coordinate[0]][coordinate[1]].shipIndex = ships.length - 1;
    });
  };

  const receiveAttack = (coordinate) => {
    if (board[coordinate[0]][coordinate[1]].hitStatus !== null) {
      throw new Error(
        `[${coordinate[0]},${coordinate[1]}] has already been attacked`
      );
    }

    if (!board[coordinate[0]][coordinate[1]].containsShip) {
      board[coordinate[0]][coordinate[1]].hitStatus = false;
    } else {
      board[coordinate[0]][coordinate[1]].hitStatus = true;
      // console.log(board[coordinate[0]][coordinate[1]].shipIndex);
      ships[board[coordinate[0]][coordinate[1]].shipIndex].hit();
    }
  };

  const allShipsSunk = () => {
    let noSunkShips = true;
    ships.forEach((currentShip) => {
      if (!currentShip.isSunk()) {
        noSunkShips = false;
      }
    });
    return noSunkShips;
  };

  return {
    get board() {
      return board;
    },
    get ships() {
      return ships;
    },
    insertShip,
    receiveAttack,
    allShipsSunk,
  };
};
