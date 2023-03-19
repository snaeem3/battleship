import { gameboard } from './gameboard';

const prompt = require('prompt-sync')({ sigint: true });

export const player = function (name, playerBoard, computerPlayer) {
  const playRound = (opponent) => {
    const targetCoords = chooseUnhitSpace(opponent.playerBoard);
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
      return chooseRandomUnhitSpace(opponentBoard.board);
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

  return {
    get playerBoard() {
      return playerBoard;
    },
    playRound,
  };
};
