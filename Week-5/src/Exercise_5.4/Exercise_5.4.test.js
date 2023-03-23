const mathOperations = require('./Exercise_5.4');

test('Math Operations', () => {
  expect(mathOperations.sum(4, 4)).toBe(8);
  expect(mathOperations.diff(6, 2)).toBe(4);
  expect(mathOperations.product(2, 0)).toBe(0)
});
