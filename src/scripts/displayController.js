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
  loadShipStart([2, 2], main);
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
        cell.addEventListener('dragenter', dragEnter);
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('dragleave', dragLeave);
        cell.addEventListener('drop', drop);

        gridContainer.appendChild(cell);
      }
    }

    parentNode.append(gridContainer);

    function dragEnter(event) {
      event.preventDefault();
      const hoveredCells = document.querySelectorAll('.dragHover');
      hoveredCells.forEach((cell) =>
        cell.classList.remove(
          'dragHover',
          'dragHover-valid',
          'dragHover-invalid'
        )
      );

      const xPosition = parseInt(event.target.dataset.xSetup);
      const yPosition = parseInt(event.target.dataset.ySetup);
      let hoverClass = '';
      if (
        evaluateAllValidPositions(
          [xPosition, yPosition],
          getCurrentShipSize(),
          isHorizontalShip()
        )
      ) {
        hoverClass = 'dragHover-valid';
      } else {
        hoverClass = 'dragHover-invalid';
      }

      if (isHorizontalShip()) {
        for (
          let x = xPosition;
          x < parseInt(xPosition) + getCurrentShipSize();
          x++
        ) {
          const cell = document.querySelector(
            `[data-x-setup~="${x}"][data-y-setup~="${yPosition}"]`
          );
          console.log(cell.textContent);
          cell.classList.add('dragHover');
          cell.classList.add(hoverClass);
        }
      } else {
        for (
          let y = yPosition;
          y < parseInt(yPosition) + getCurrentShipSize();
          y++
        ) {
          const cell = document.querySelector(
            `[data-x-setup~="${xPosition}"][data-y-setup~="${y}"]`
          );
          console.log(cell.textContent);
          cell.classList.add('dragHover');
          cell.classList.add(hoverClass);
        }
      }
    }

    function dragOver(event) {
      event.preventDefault();
      // console.log('dragover called');
      // console.log(event.target);
    }

    function dragLeave(event) {
      // event.target.classList.remove('dragHover');
    }

    function drop(event) {
      const hoveredCells = document.querySelectorAll('.dragHover');
      hoveredCells.forEach((cell) =>
        cell.classList.remove(
          'dragHover',
          'dragHover-valid',
          'dragHover-invalid'
        )
      );

      const xPosition = parseInt(event.target.dataset.xSetup);
      const yPosition = parseInt(event.target.dataset.ySetup);
      // Do not continue if invalid drop location
      if (
        !evaluateAllValidPositions(
          [xPosition, yPosition],
          getCurrentShipSize(),
          isHorizontalShip()
        )
      ) {
        console.error(`${xPosition},${yPosition} is invalid`);
        return;
      }

      // Set each selected cell to be a ship
      if (isHorizontalShip()) {
        for (let x = xPosition; x < xPosition + getCurrentShipSize(); x++) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${x}"][data-y-setup~="${yPosition}"]`
          );
          cell.classList.add('ship');
          cell.removeEventListener('dragenter', dragEnter);
          cell.removeEventListener('drop', drop);
        }
      } else {
        for (let y = yPosition; y < yPosition + getCurrentShipSize(); y++) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${xPosition}"][data-y-setup~="${y}"]`
          );
          cell.classList.add('ship');
          cell.removeEventListener('dragenter', dragEnter);
          cell.removeEventListener('drop', drop);
        }
      }

      // Add coordinates to array

      // Remove ship from shipContainer
      const shipContainer = document.querySelector('#shipContainer');
      shipContainer.removeChild(shipContainer.firstChild);
    }

    function evaluateAllValidPositions(startingPosition, length, horizontal) {
      // Check if ship goes outside grid bounds
      if (horizontal && startingPosition[0] + length > gridSize) {
        return false;
      }
      if (!horizontal && startingPosition[1] + length > gridSize) {
        return false;
      }

      // Check if ship interferes with existing ship
      if (horizontal) {
        for (
          let x = startingPosition[0];
          x < startingPosition[0] + length;
          x++
        ) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${x}"][data-y-setup~="${startingPosition[1]}"]`
          );
          if (cell.classList.contains('ship')) {
            return false;
          }
        }
      } else {
        for (
          let y = startingPosition[1];
          y < startingPosition[1] + length;
          y++
        ) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${startingPosition[0]}"][data-y-setup~="${y}"]`
          );
          if (cell.classList.contains('ship')) {
            return false;
          }
        }
      }

      return true;
    }

    function getCurrentShipSize() {
      const shipContainer = document.querySelector('#shipContainer');
      return shipContainer.firstChild.childElementCount;
    }

    function isHorizontalShip() {
      return true;
    }
  }

  function loadShipStart(shipSizeArray = [5, 4, 3, 3, 2], parentNode = main) {
    const rotateBtn = document.createElement('button');
    rotateBtn.textContent = 'Rotate Ship';
    const shipContainer = document.createElement('div');
    shipContainer.setAttribute('id', 'shipContainer');
    const resetBoardBtn = document.createElement('button');
    resetBoardBtn.textContent = 'Reset Board';

    // Create a ship div for every ship
    shipSizeArray.forEach((shipSize) => {
      const ship = document.createElement('div');
      ship.classList.add('draggable');
      ship.classList.add('ship');
      ship.draggable = true;
      ship.dataset.isHorizontal = true;
      ship.addEventListener('dragstart', dragStart);
      function dragStart(event) {
        event.dataTransfer.clearData();
        event.dataTransfer.setData('text/plain', JSON.stringify({ shipSize }));
      }

      // Add divs equal to ship size to each ship div
      for (let i = 0; i < shipSize; i++) {
        const shipUnit = document.createElement('div');
        shipUnit.textContent = i;
        shipUnit.dataset.index = i;
        shipUnit.classList.add('ship-unit');
        shipUnit.classList.add('grid-cell');
        ship.appendChild(shipUnit);
      }

      shipContainer.append(ship);
    });

    parentNode.append(rotateBtn, shipContainer, resetBoardBtn);
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
