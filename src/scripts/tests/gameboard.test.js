import { gameboard } from '../gameboard';

test('Create board with empty spaces', () => {
  const testBoard = gameboard();
  expect(testBoard.board[0][0].hitStatus).toBeFalsy();
  expect(testBoard.board[11][11].containsShip).toBeFalsy();
});

test('Add ship to board', () => {
  const testBoard = gameboard();
  const coordinates = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  testBoard.insertShip(coordinates);
  expect(testBoard.board[1][1].containsShip).toBeTruthy();
  expect(testBoard.board[1][2].containsShip).toBeTruthy();
  expect(testBoard.board[1][3].containsShip).toBeTruthy();
});

test('Throw error when ship added outside of board', () => {
  const testBoard = gameboard(12);
  const coordinates = [
    [0, 11],
    [0, 12],
  ];

  expect(() => testBoard.insertShip(coordinates)).toThrow(
    '[0,12] is outside of grid size 12'
  );
});

test('Throw error when ship added to occupied space', () => {
  const testBoard = gameboard();
  const coordinatesA = [
    [1, 1],
    [1, 2],
    [1, 3],
  ];
  testBoard.insertShip(coordinatesA);

  const coordinatesB = [
    [1, 2],
    [2, 2],
  ];

  expect(() => testBoard.insertShip(coordinatesB)).toThrow(
    '[1,2] is already occupied'
  );
});
