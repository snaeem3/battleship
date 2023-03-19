import { gameboard } from '../gameboard';

test('Create board with empty spaces', () => {
  const testBoard = gameboard();
  expect(testBoard.board[0][0].hitStatus).toBeFalsy();
  expect(testBoard.board[11][11].containsShip).toBeFalsy();
});
