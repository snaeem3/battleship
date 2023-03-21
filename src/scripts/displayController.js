import * as gameController from './gameController';
import { player } from './player';

const main = document.querySelector('main');

function loadStartScreen() {
  console.log('Start screen loaded');
  loadGridSetup(main);
  const startButton = document.createElement('button');
  startButton.setAttribute('id', 'start-button');
  startButton.textContent = 'Start Game';
  startButton.addEventListener('click', () => {
    loadGame();
  });

  main.appendChild(startButton);

  function loadGridSetup(parentNode, gridSize = 12) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        cell.textContent = `${i}, ${j}`;
        cell.dataset.xSetup = i;
        cell.dataset.ySetup = j;
        cell.classList.add('grid-cell');

        gridContainer.appendChild(cell);
      }
    }

    parentNode.append(gridContainer);
  }
}

function loadGame() {
  removeAllChildNodes(main);

  gameController.setPlayers(); // input player 1 selected ship locations here

  const player1Container = document.createElement('div');
  const player2Container = document.createElement('div');

  loadBoard(gameController.players[0], true, player1Container);
  loadBoard(gameController.players[1], false, player2Container);

  main.append(player1Container, player2Container);
}

function loadBoard(currentPlayer, showAllShips, parentNode) {
  const boardContainer = document.createElement('div');
  boardContainer.classList.add('grid');
  const gridValues = currentPlayer.playerBoard.board;
  const gridSize = gridValues.length;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      if (!showAllShips) {
        // Computer player board inputted so add coordinate data for player to click
        cell.dataset.xCoord = i;
        cell.dataset.yCoord = j;
      }
      if (gridValues[i][j].hitStatus !== null) {
        // Cell has been attacked
        if (gridValues[i][j].hitStatus) {
          cell.classList.add('hit');
          cell.textContent = 'X';
        } else {
          cell.classList.add('miss');
          cell.textContent = 'Y';
        }
      }

      if (showAllShips && gridValues[i][j].containsShip) {
        cell.classList.add('ship');
      }

      boardContainer.append(cell);
    }
  }

  parentNode.append(boardContainer);
}

function loadWinnerMessage(winningPlayer) {}

function clickHandlerBoard(event) {
  const coords = [event.target.dataset.xCoord, event.target.dataset.yCoord];
  gameController.playRound(coords);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export {
  loadStartScreen,
  loadGame,
  loadBoard,
  loadWinnerMessage,
  clickHandlerBoard,
};
