import { player } from '../player';
import { gameboard } from '../gameboard';

test('Creates a human and computer player', () => {
  const testBoard1 = gameboard();
  const testBoard2 = gameboard();
  const coordinates = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  testBoard1.insertShip(coordinates);
  testBoard2.insertShip(coordinates);

  const player1 = player('Steve', testBoard1, false);
  const player2 = player('Computer', testBoard2, true);
});

test.skip('Player 1 can play round', () => {
  const testBoard1 = gameboard();
  const testBoard2 = gameboard();
  const coordinates = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  testBoard1.insertShip(coordinates);
  testBoard2.insertShip(coordinates);

  const player1 = player('Steve', testBoard1, false);
  const player2 = player('Computer', testBoard2, true);

  const { chosenCoords, hitShip } = player1.playRound(player2);
  expect(
    player2.playerBoard.board[chosenCoords[0]][chosenCoords[1]].hitStatus
  ).not.toBeNull();
  // console.log(`Player 2 board: ${player2.playerBoard.board}`);
});

test('Computer player can play round', () => {
  const testBoard1 = gameboard();
  const testBoard2 = gameboard();
  const coordinates = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  testBoard1.insertShip(coordinates);
  testBoard2.insertShip(coordinates);

  const player1 = player('Steve', testBoard1, false);
  const player2 = player('Computer', testBoard2, true);

  const { chosenCoords, hitShip } = player2.playRound(player1);
  expect(
    player1.playerBoard.board[chosenCoords[0]][chosenCoords[1]].hitStatus
  ).not.toBeNull();
  // console.log(chosenCoords);
  // console.log(`Hit ship? ${hitShip}`);
  // console.log(player1.playerBoard.board);
});
