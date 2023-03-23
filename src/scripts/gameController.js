import { player } from './player';
import { gameboard } from './gameboard';
import * as displayController from './displayController';

let players = [];
let activePlayer = null;
let inActivePlayer = null;

// const gameController = (player1, player2) => {
//   let gameComplete = false;
//   let player1Turn = true;
//   let winner = null;
//   while (!gameComplete) {
//     if (player1Turn) {
//       const { chosenCoords, hitShip } = player1.playRound(player2);
//       if (player2.playerBoard.allShipsSunk()) {
//         gameComplete = true;
//         winner = player1;
//       }
//       displayController.loadBoardContainer(player2, false);
//       player1Turn = false;
//     } else {
//       const { chosenCoords, hitShip } = player2.playRound(player1);
//       if (player1.playerBoard.allShipsSunk()) {
//         gameComplete = true;
//         winner = player2;
//       }
//       displayController.loadBoardContainer(player1, true);
//       player1Turn = true;
//     }
//   }

//   return winner;
// };

function setPlayers(
  player1 = player('Player 1', generateRandomBoard(), false),
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

function generateRandomBoard(shipSizeArr = [2, 2], gridSize = 12) {
  const randomBoard = gameboard(gridSize);
  // TEMPORARY BOARD, replace with random board code later
  // randomBoard.insertShip([[2, 2]]);

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

  // function getPossibleShipCoords(board, shipLength) {
  //   const horizontalCoords = [];
  //   const verticalCoords = [];

  //   for (let i = 0; i < board.length; i++) {
  //     for (let j = 0; j < board[i].length; j++) {
  //       // Create an array of horizontal and vertical  coordinates for the potential ship
  //       const tempHorizontalCoords = [];
  //       const tempVerticalCoords = [];

  //       for (let k = 0; k < shipLength; k++) {
  //         // Check that the coordinate is inside the board and not occupied by a ship
  //         if (i + k < board.length && !board[i + k][j].containsShip) {
  //           tempHorizontalCoords.push([i + k, j]);
  //         }

  //         if (j + k < board.length && !board[i][j + k].containsShip) {
  //           tempVerticalCoords.push([i, j + k]);
  //         }
  //       }

  //       // if the tempCoordinates length matches shipLength then all coordinates are valid
  //       if (tempHorizontalCoords.length === shipLength) {
  //         horizontalCoords.push(tempHorizontalCoords);
  //       }

  //       if (tempVerticalCoords.length === shipLength) {
  //         verticalCoords.push(tempVerticalCoords);
  //       }
  //     }
  //   }

  //   return {
  //     possibleHorizontalCoords: horizontalCoords,
  //     possibleVerticalCoords: verticalCoords,
  //   };
  // }
}

function playRoundActive(
  coords = inActivePlayer.playerBoard.getRandomAttackableSpace()
) {
  // Have the active player play a round on opponents coords then swap active and inactive
  // Use a random attackable space from the inactive player board if no coordinate given

  const roundResults = activePlayer.playRound(inActivePlayer, coords);
  const temp = activePlayer;
  activePlayer = inActivePlayer;
  inActivePlayer = temp;

  return roundResults;
}

function playerLoses(currentPlayer) {
  return currentPlayer.playerBoard.allShipsSunk();
}

export { players, setPlayers, resetPlayers, playRoundActive, playerLoses };
