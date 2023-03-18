export const ship = function (length) {
  let health = length;

  const hit = () => {
    health -= 1;
  };

  const isSunk = () => health <= 0;

  return {
    length,
    hit,
    get health() {
      return health;
    },
    isSunk,
  };
};
