import * as gameController from './gameController';
import { player } from './player';

const main = document.querySelector('main');

const player1Container = document.createElement('div');
const player2Container = document.createElement('div');
player1Container.setAttribute('id', 'player1-container');
player2Container.setAttribute('id', 'player2-container');

function loadStartScreen() {
  removeAllChildNodes(main);
  gameController.clearSetupShips();
  gameController.resetPlayers();

  const setupControls = document.createElement('div');
  setupControls.setAttribute('id', 'setup-controls');
  setupControls.classList.add('box-shadow');

  const setupInstructions = document.createElement('p');
  setupInstructions.setAttribute('id', 'setup-instructions');
  setupInstructions.textContent = 'Drag and drop your ships on the board';

  setupControls.appendChild(setupInstructions);

  let horizontal = true; // current ship orientation
  loadGridSetup(main);
  loadShipStart();
  const randomizeBoardBtn = document.createElement('button');
  randomizeBoardBtn.textContent = 'Random Board';
  randomizeBoardBtn.addEventListener('click', populateRandomBoard);

  const startButton = document.createElement('button');
  startButton.setAttribute('id', 'start-button');
  startButton.textContent = 'Start Game';
  startButton.disabled = true;
  startButton.addEventListener('click', () => {
    loadGame();
  });

  setupControls.append(randomizeBoardBtn, startButton);
  main.appendChild(setupControls);

  function loadGridSetup(parentNode, gridSize = 12) {
    document.querySelector(':root').style.setProperty('--grid-size', gridSize);
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('grid');

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        // cell.textContent = `${i}, ${j}`;
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
      removeDragHoverCells();

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
          // console.log(cell.textContent);
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
      removeDragHoverCells();

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

      const shipCoords = [];
      // Set each selected cell to be a ship
      if (isHorizontalShip()) {
        for (let x = xPosition; x < xPosition + getCurrentShipSize(); x++) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${x}"][data-y-setup~="${yPosition}"]`
          );
          cell.classList.add('ship');
          cell.removeEventListener('dragenter', dragEnter);
          cell.removeEventListener('drop', drop);
          shipCoords.push([x, yPosition]);
        }
      } else {
        for (let y = yPosition; y < yPosition + getCurrentShipSize(); y++) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${xPosition}"][data-y-setup~="${y}"]`
          );
          cell.classList.add('ship');
          cell.removeEventListener('dragenter', dragEnter);
          cell.removeEventListener('drop', drop);
          shipCoords.push([xPosition, y]);
        }
      }

      // Add coordinates to gameController setup Array
      gameController.addSetupShip(shipCoords);

      // Remove ship from shipContainer
      const shipContainer = document.querySelector('#shipContainer');
      shipContainer.removeChild(shipContainer.firstChild);

      // Set the next ship as draggable
      if (shipContainer.hasChildNodes()) {
        shipContainer.firstChild.draggable = true;
      }

      // Reset horizontal orientation
      horizontal = true;

      // Enable start button if all ships placed
      // Disable rotate button if all ships placed
      if (shipContainer.childElementCount < 1) {
        document.querySelector('#start-button').disabled = false;
        document.querySelector('#rotate-button').disabled = true;
      }
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
      return horizontal;
    }
  }

  function populateRandomBoard() {
    loadStartScreen(); // clears grid
    const randomBoard = gameController.generateRandomBoard();
    gameController.setPlayers(player('Player 1', randomBoard, false)); // Tell game controller to set player 1 board as the random board

    const gridContainer = document.querySelector('.grid');
    for (let x = 0; x < randomBoard.board.length; x++) {
      for (let y = 0; y < randomBoard.board[x].length; y++) {
        if (randomBoard.board[x][y].containsShip) {
          const cell = gridContainer.querySelector(
            `[data-x-setup~="${x}"][data-y-setup~="${y}"]`
          );
          cell.classList.add('ship');
        }
      }
    }

    // Remove draggable ships
    const shipContainer = document.querySelector('#shipContainer');
    removeAllChildNodes(shipContainer);

    if (shipContainer.childElementCount < 1) {
      document.querySelector('#start-button').disabled = false;
      document.querySelector('#rotate-button').disabled = true;
    }
  }

  function loadShipStart(
    shipSizeArray = [5, 4, 3, 3, 2],
    parentNode = setupControls
  ) {
    const rotateBtn = document.createElement('button');
    rotateBtn.setAttribute('id', 'rotate-button');
    rotateBtn.addEventListener('click', rotateCurrentShip);
    rotateBtn.textContent = 'Rotate Ship';
    const shipContainer = document.createElement('div');
    shipContainer.setAttribute('id', 'shipContainer');
    const resetBoardBtn = document.createElement('button');
    resetBoardBtn.textContent = 'Reset Board';
    resetBoardBtn.addEventListener('click', () => {
      loadStartScreen();
    });

    // Create a ship div for every ship
    shipSizeArray.forEach((shipSize) => {
      const ship = document.createElement('div');
      ship.classList.add('draggable');
      // ship.classList.add('ship');

      // ship.draggable = true;
      ship.dataset.isHorizontal = true;
      ship.addEventListener('dragstart', dragStart);
      function dragStart(event) {
        event.dataTransfer.clearData();
        event.dataTransfer.setData('text/plain', JSON.stringify({ shipSize }));
      }
      ship.addEventListener('dragend', dragEnd);
      function dragEnd(event) {
        removeDragHoverCells();
      }

      // Add divs equal to ship size to each ship div
      for (let i = 0; i < shipSize; i++) {
        const shipUnit = document.createElement('div');
        // shipUnit.textContent = i;
        shipUnit.dataset.index = i;
        shipUnit.classList.add('ship-unit');
        // shipUnit.classList.add('grid-cell');
        ship.appendChild(shipUnit);
      }

      shipContainer.append(ship);
    });

    shipContainer.firstChild.draggable = true;

    parentNode.append(rotateBtn, shipContainer, resetBoardBtn);

    function rotateCurrentShip() {
      horizontal = !horizontal;
      if (horizontal) {
        document
          .querySelector('#shipContainer > div:nth-child(1)')
          .classList.remove('vertical');
      } else {
        document
          .querySelector('#shipContainer > div:nth-child(1)')
          .classList.add('vertical');
      }
    }
  }

  function removeDragHoverCells() {
    const hoveredCells = document.querySelectorAll('.dragHover');
    hoveredCells.forEach((cell) =>
      cell.classList.remove('dragHover', 'dragHover-valid', 'dragHover-invalid')
    );
  }
}

function loadGame() {
  removeAllChildNodes(main); // remove grid setup elements
  removeAllChildNodes(player1Container);
  removeAllChildNodes(player2Container);

  // Random board sets players when called
  // If ships were dragged onto board, sets players needs to be called here
  if (gameController.players.length === 0) {
    gameController.resetPlayers();
    gameController.setPlayers();
  }

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

  const player1Name = document.createElement('h2');
  player1Name.textContent = gameController.players[0].name;
  player1Name.classList.add('player-name');

  const player2Name = document.createElement('h2');
  player2Name.textContent = gameController.players[1].name;
  player2Name.classList.add('player-name');

  player1Container.append(boardContainer1, player1Name);
  player2Container.append(boardContainer2, player2Name);
  main.append(player1Container, player2Container);
}

function loadBoardContainer(currentPlayer, showAllShips) {
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
          // cell.textContent = 'X';
        } else {
          cell.classList.add('miss');
          // cell.textContent = 'O';
        }
      }

      if (showAllShips && gridValues[i][j].containsShip) {
        cell.classList.add('ship');
      }

      boardContainer.append(cell);
    }
  }

  return boardContainer;
}

function loadWinner(winningPlayer) {
  revealPlayer2Ships();
  disableGridCells();

  const gameEndPopup = document.createElement('div');
  gameEndPopup.classList.add('pop-up');

  const winningMessage = document.createElement('h2');
  winningMessage.setAttribute('id', 'winning-message');
  winningMessage.textContent = `${winningPlayer.name} wins!`;

  const newGameBtn = document.createElement('button');
  newGameBtn.textContent = 'Start New Game';
  newGameBtn.addEventListener('click', loadStartScreen);

  gameEndPopup.append(winningMessage, newGameBtn);
  main.prepend(gameEndPopup);
}

function clickHandlerBoard(event) {
  const coords = [event.target.dataset.xCoord, event.target.dataset.yCoord];

  const player1Name = document.createElement('h2');
  player1Name.textContent = gameController.players[0].name;
  player1Name.classList.add('player-name');

  const player2Name = document.createElement('h2');
  player2Name.textContent = gameController.players[1].name;
  player2Name.classList.add('player-name');

  // Check if chosen coordinate has not been attacked yet
  if (
    gameController.players[1].playerBoard.board[coords[0]][coords[1]]
      .hitStatus === null
  ) {
    let roundResult = gameController.playRoundActive(coords);
    removeAllChildNodes(player2Container);
    player2Container.append(
      loadBoardContainer(gameController.players[1], false, player2Container),
      player2Name
    );

    // Check if player 2 lost
    if (gameController.playerLoses(gameController.players[1])) {
      // console.log('Player 2 lost');
      loadWinner(gameController.players[0]);
    } else {
      // Otherwise play the next round

      roundResult = gameController.playRoundActive();
      console.log(roundResult);
      removeAllChildNodes(player1Container);
      player1Container.append(
        loadBoardContainer(gameController.players[0], true),
        player1Name
      );

      // Check if player 1 lost
      if (gameController.playerLoses(gameController.players[0])) {
        // console.log('Player 1 lost');
        loadWinner(gameController.players[1]);
      }
    }
  }
}

function revealPlayer2Ships() {
  // to be called when game ends
  removeAllChildNodes(player2Container);
  const player2Name = document.createElement('h2');
  player2Name.textContent = gameController.players[1].name;
  player2Name.classList.add('player-name');
  player2Container.append(
    loadBoardContainer(gameController.players[1], true, player2Container), // true value indicates ships will be revealed
    player2Name
  );
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
  loadWinner,
  clickHandlerBoard,
};
