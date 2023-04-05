import { player } from './player';
import { gameboard } from './gameboard';
import * as displayController from './displayController';

let players = [];
let activePlayer = null;
let inActivePlayer = null;
let setupShips = [];

function addSetupShip(coords) {
  setupShips.push(coords);
}

function clearSetupShips() {
  setupShips = [];
}

function generateSetupBoard() {
  const setupBoard = gameboard();
  setupShips.forEach((setupShip) => {
    setupBoard.insertShip(setupShip);
  });
  return setupBoard;
}

function setPlayers(
  player1 = player('Player 1', generateSetupBoard(), false),
  player2 = generateComputerPlayer()
) {
  players.push(player1);
  players.push(player2);

  activePlayer = players[0];
  inActivePlayer = players[1];
}

function resetPlayers() {
  players = [];
}

function generateComputerPlayer(shipSizeArr, gridSize = 12) {
  // shipSizeArr is an array of ship sizes to be created
  // Example: shipSizeArr = [2, 3, 3, 4, 4, 5] generates a player with 6 ships of size 2, 3, 3, 4, 4, and 5
  const computerBoard = generateRandomBoard(shipSizeArr, gridSize);

  return player('Computer', computerBoard, true);
}

function generateRandomBoard(shipSizeArr = [5, 4, 3, 3, 2], gridSize = 12) {
  const randomBoard = gameboard(gridSize);
  // randomBoard.insertShip([[2, 2]]); // Temporary board code

  // Assume total ship area < grid area or add check here later

  shipSizeArr.forEach((shipSize) => {
    const { possibleHorizontalCoords, possibleVerticalCoords } =
      randomBoard.getPossibleShipCoords(shipSize);

    // Randomly choose between horizontal and vertical
    const isHorizontal = Math.random() > 0.5;

    // Randomly choose coordinates in array
    let selectedCoords = [];
    if (isHorizontal) {
      selectedCoords =
        possibleHorizontalCoords[
          Math.floor(Math.random() * possibleHorizontalCoords.length)
        ];
    } else {
      selectedCoords =
        possibleVerticalCoords[
          Math.floor(Math.random() * possibleVerticalCoords.length)
        ];
    }

    // Insert the ship into randomBoard
    randomBoard.insertShip(selectedCoords);
  });

  return randomBoard;
}

function playRoundActive(coords) {
  // Have the active player play a round on opponents coords then swap active and inactive

  const roundResults = activePlayer.playRound(inActivePlayer, coords); // playRound will automatically plug likely coords for computer player
  const temp = activePlayer;
  activePlayer = inActivePlayer;
  inActivePlayer = temp;

  return roundResults;
}

function playerLoses(currentPlayer) {
  return currentPlayer.playerBoard.allShipsSunk();
}

export {
  addSetupShip,
  clearSetupShips,
  players,
  setPlayers,
  resetPlayers,
  generateRandomBoard,
  playRoundActive,
  playerLoses,
};
