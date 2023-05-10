import { generateDecimalAndBinaryPair } from './generateDecimalAndBinaryPair';

test('generateDecimalAndBinaryPair generates a tuple of a number and its binary representation', () => {
  const [decimal, binary] = generateDecimalAndBinaryPair(0, 255);
  expect(decimal).toBeGreaterThanOrEqual(0);
  expect(decimal).toBeLessThanOrEqual(255);
  expect(binary).toEqual(decimal.toString(2).padStart(8, '0'));
});
