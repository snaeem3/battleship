import * as gameController from './gameController';
import { player } from './player';

const main = document.querySelector('main');

const player1Container = document.createElement('div');
const player2Container = document.createElement('div');
player1Container.setAttribute('id', 'player1-container');
player2Container.setAttribute('id', 'player2-container');

function loadStartScreen() {
  removeAllChildNodes(main);
  console.log('Start screen loaded');
  loadGridSetup(main);
  const clearBoardBtn = document.createElement('button');
  const randomizeBoardBtn = document.createElement('button');

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
  removeAllChildNodes(main); // remove grid setup elements
  removeAllChildNodes(player1Container);
  removeAllChildNodes(player2Container);
  gameController.resetPlayers();
  gameController.setPlayers(); // input player 1 selected ship locations here
  main.append(player1Container, player2Container);

  const boardContainer1 = loadBoardContainer(
    gameController.players[0],
    true,
    player1Container
  );
  const boardContainer2 = loadBoardContainer(
    gameController.players[1],
    false,
    player2Container
  );

  player1Container.appendChild(boardContainer1);
  player2Container.appendChild(boardContainer2);
}

function loadBoardContainer(currentPlayer, showAllShips, node) {
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
        cell.addEventListener('click', clickHandlerBoard);
      }
      if (gridValues[i][j].hitStatus !== null) {
        // Cell has been attacked
        if (gridValues[i][j].hitStatus) {
          cell.classList.add('hit');
          cell.textContent = 'X';
        } else {
          cell.classList.add('miss');
          cell.textContent = 'O';
        }
      }

      if (showAllShips && gridValues[i][j].containsShip) {
        cell.classList.add('ship');
      }

      boardContainer.append(cell);
    }
  }

  return boardContainer;

  // parentNode.append(boardContainer);
  // parentNode = boardContainer;
}

function loadWinnerMessage(winningPlayer) {
  disableGridCells();

  const winningMessage = document.createElement('div');
  winningMessage.setAttribute('id', 'winning-message');
  winningMessage.textContent = `${winningPlayer.name} wins!`;

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start New Game';
  newGameBtn.addEventListener('click', loadStartScreen);

  main.append(winningMessage, newGameBtn);
}

function clickHandlerBoard(event) {
  console.log('clickHandlerBoard called');
  console.log(event.target);
  const coords = [event.target.dataset.xCoord, event.target.dataset.yCoord];
  // Check if chosen coordinate has not been attacked yet
  if (
    gameController.players[1].playerBoard.board[coords[0]][coords[1]]
      .hitStatus === null
  ) {
    let roundResult = gameController.playRoundActive(coords);
    console.log(roundResult);
    removeAllChildNodes(player2Container);
    player2Container.appendChild(
      loadBoardContainer(gameController.players[1], false, player2Container)
    );

    // Check if player 2 lost
    if (gameController.playerLoses(gameController.players[1])) {
      console.log('Player 2 lost');
      loadWinnerMessage(gameController.players[0]);
    } else {
      // Otherwise play the next round

      roundResult = gameController.playRoundActive();
      console.log(roundResult);
      removeAllChildNodes(player1Container);
      player1Container.appendChild(
        loadBoardContainer(gameController.players[0], true)
      );

      // Check if player 1 lost
      if (gameController.playerLoses(gameController.players[0])) {
        console.log('Player 1 lost');
        loadWinnerMessage(gameController.players[1]);
      }
    }
  }
}

function disableGridCells() {
  const gridCells = document.querySelectorAll('#player2-container .grid-cell');
  gridCells.forEach((cell) => {
    cell.removeEventListener('click', clickHandlerBoard);
  });
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

export {
  loadStartScreen,
  loadGame,
  loadBoardContainer,
  loadWinnerMessage,
  clickHandlerBoard,
};
