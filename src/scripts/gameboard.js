export const gameboard = function (gridSize = 12) {
  //   const board = [][];
  //   for (let i = 0; i < gridSize; i++) {
  //     for (let j = 0; j < gridSize; j++) {
  //       board[i][j] = { hitStatus: false, containsShip: false };
  //     }
  //   }
  const spaceObject = { hitStatus: false, containsShip: false };
  const board = [...Array(gridSize)].map((e) =>
    Array(gridSize).fill(spaceObject)
  );

  return { board };
};
