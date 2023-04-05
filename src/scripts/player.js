import { gameboard } from './gameboard';

// const prompt = require('prompt-sync')({ sigint: true });

export const player = function (name, playerBoard, computerPlayer) {
  const playRound = (
    opponent,
    targetCoords = chooseUnhitSpace(opponent.playerBoard)
  ) => {
    // const targetCoords = chooseUnhitSpace(opponent.playerBoard);
    opponent.playerBoard.receiveAttack(targetCoords);

    // Return hitShip = true if the player hit an opponent ship
    return {
      chosenCoords: targetCoords,
      hitShip:
        opponent.playerBoard.board[targetCoords[0]][targetCoords[1]]
          .containsShip,
    };
  };

  function chooseUnhitSpace(opponentBoard) {
    if (computerPlayer) {
      // return chooseRandomUnhitSpace(opponentBoard.board);
      return chooseLikelyUnhitSpace(opponentBoard);
    }
    let xCoord = prompt('Enter an x-coordinate: ');
    let yCoord = prompt('Enter a y-coordinate: ');

    while (opponentBoard.board[xCoord][yCoord].hitStatus !== null) {
      alert('You have already chosen that space');
      xCoord = prompt('Enter an x-coordinate: ');
      yCoord = prompt('Enter a y-coordinate: ');
    }

    return [xCoord, yCoord];
  }

  function chooseRandomUnhitSpace(grid) {
    const availableCoords = [];

    // Loop through grid and add hitStatus: null coordinates
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[i].length; j++) {
        if (grid[i][j].hitStatus === null) {
          availableCoords.push([i, j]);
        }
      }
    }

    return availableCoords[Math.floor(Math.random() * availableCoords.length)];
  }

  function chooseLikelyUnhitSpace(board) {
    const grid = board.board;
    const hitCoords = board.getHits();
    const likelyCoords = [];

    // Loop through hitCoords and add valid neighbors to availableCoords
    hitCoords.forEach((hitCoord) => {
      const neighbors = [
        [hitCoord[0] + 1, hitCoord[1]], // x + 1
        [hitCoord[0], hitCoord[1] + 1], // y + 1
        [hitCoord[0] - 1, hitCoord[1]], // x - 1
        [hitCoord[0], hitCoord[1] - 1], // y - 1
      ];

      // Loop through each neighbor and add to availableCoords if valid and not already added
      neighbors.forEach((neighbor) => {
        // Check if valid neighbor
        if (board.validNeighbor(neighbor)) {
          // Check if neighbor is not already in availableCoords
          if (!likelyCoords.includes(neighbor)) {
            likelyCoords.push(neighbor);
          }
        }
      });
    });

    // console.log(`Likely coords found: ${likelyCoords}`);
    if (likelyCoords.length > 0) {
      return likelyCoords[0];
    }
    return chooseRandomUnhitSpace(grid);
  }

  return {
    name,
    get playerBoard() {
      return playerBoard;
    },
    playRound,
  };
};
