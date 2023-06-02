import { expect, it } from 'vitest';

it('should pass if the two numbers would add up correctly', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3);
});
