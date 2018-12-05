import { part1, part2 } from './d2';

describe('2017/Day 2', () => {
  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]])).toBe(18);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2([[5, 9, 2, 8], [9, 4, 7, 3], [3, 8, 6, 5]])).toBe(9);
    });
  });
});
