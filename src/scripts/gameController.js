import { player } from './player';
import { gameboard } from './gameboard';
import * as displayController from './displayController';

const players = [];
let activePlayer = null;

const gameController = (player1, player2) => {
  let gameComplete = false;
  let player1Turn = true;
  let winner = null;
  while (!gameComplete) {
    if (player1Turn) {
      const { chosenCoords, hitShip } = player1.playRound(player2);
      if (player2.playerBoard.allShipsSunk()) {
        gameComplete = true;
        winner = player1;
      }
      displayController.loadBoard(player2, false);
      player1Turn = false;
    } else {
      const { chosenCoords, hitShip } = player2.playRound(player1);
      if (player1.playerBoard.allShipsSunk()) {
        gameComplete = true;
        winner = player2;
      }
      displayController.loadBoard(player1, true);
      player1Turn = true;
    }
  }

  return winner;
};

function setPlayers(
  player1 = player('Player 1', generateRandomBoard(), false),
  player2 = generateComputerPlayer()
) {
  players.push(player1);
  players.push(player2);

  activePlayer = players[0];
}

function generateComputerPlayer(shipSizeArr, gridSize = 12) {
  // shipSizeArr is an array of ship sizes to be created
  // Example: shipSizeArr = [2, 3, 3, 4, 4, 5] generates a player with 6 ships of size 2, 3, 3, 4, 4, and 5
  const computerBoard = generateRandomBoard(shipSizeArr, gridSize);

  return player('Computer', computerBoard, true);
}

function generateRandomBoard(shipSizeArr, gridSize = 12) {
  const randomBoard = gameboard(gridSize);
  // TEMPORARY BOARD, replace with random board code later
  randomBoard.insertShip([[2, 2]]);

  return randomBoard;
}

function playRound(coords) {}

export { players, setPlayers, playRound };
