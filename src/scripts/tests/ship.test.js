import { ship } from '../ship';

test('Successfully creates ship', () => {
  const testShip = ship(3);
  expect(testShip.length).toBe(3);
  expect(testShip.health).toBe(3);
});

test('hit() reduces ship health by 1', () => {
  const testShip = ship(3);
  testShip.hit();
  expect(testShip.health).toBe(2);
});

test('isSunk() works correctly', () => {
  const testShip = ship(1);
  testShip.hit();
  expect(testShip.isSunk()).toBeTruthy();
});
