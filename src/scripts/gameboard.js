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

  const getAttackableSpaces = () => {
    const attackableSpaces = [];
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j].hitStatus === null) {
          attackableSpaces.push([i, j]);
        }
      }
    }
    return attackableSpaces;
  };

  const getRandomAttackableSpace = () => {
    const possibleSpaces = getAttackableSpaces();
    return possibleSpaces[Math.floor(Math.random() * possibleSpaces.length)];
  };

  const getPossibleShipCoords = (shipLength) => {
    const horizontalCoords = [];
    const verticalCoords = [];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        // Create an array of horizontal and vertical  coordinates for the potential ship
        const tempHorizontalCoords = [];
        const tempVerticalCoords = [];

        for (let k = 0; k < shipLength; k++) {
          // Check that the coordinate is inside the board and not occupied by a ship
          if (i + k < board.length && !board[i + k][j].containsShip) {
            tempHorizontalCoords.push([i + k, j]);
          }

          if (j + k < board.length && !board[i][j + k].containsShip) {
            tempVerticalCoords.push([i, j + k]);
          }
        }

        // if the tempCoordinates length matches shipLength then all coordinates are valid
        if (tempHorizontalCoords.length === shipLength) {
          horizontalCoords.push(tempHorizontalCoords);
        }

        if (tempVerticalCoords.length === shipLength) {
          verticalCoords.push(tempVerticalCoords);
        }
      }
    }

    return {
      possibleHorizontalCoords: horizontalCoords,
      possibleVerticalCoords: verticalCoords,
    };
  };

  const getHits = () => {
    const hits = [];

    // Loop through each row and column of the board
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        // If the space has been hit and contains a ship, add it to the hits array
        if (
          board[row][col].hitStatus === true &&
          board[row][col].containsShip
        ) {
          hits.push([row, col]);
        }
      }
    }

    return hits;
  };

  const validNeighbor = (coord) => {
    // returns true if given coordinates are valid unhit spaces
    if (
      coord[0] >= 0 &&
      coord[0] < board.length &&
      coord[1] >= 0 &&
      coord[1] < board.length
    ) {
      // coord is within board bounds
      if (board[coord[0]][coord[1]].hitStatus === null) {
        return true;
      }
    }
    return false;
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
    getRandomAttackableSpace,
    getPossibleShipCoords,
    getHits,
    validNeighbor,
  };
};
