import { part1, part2 } from './d3';

describe('2017/Day 3', () => {
  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1(1)).toBe(0);
      expect(part1(12)).toBe(3);
      expect(part1(23)).toBe(2);
      expect(part1(1024)).toBe(31);
    });

    it('should resolve input', () => {
      expect(part1(347991)).toBe(480);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2(1)).toBe(2);
      expect(part2(2)).toBe(4);
      expect(part2(4)).toBe(5);
      expect(part2(23)).toBe(25);
      expect(part2(806)).toBe(880);
    });

    it('should resolve input', () => {
      expect(part2(347991)).toBe(349975);
    });
  });
});
