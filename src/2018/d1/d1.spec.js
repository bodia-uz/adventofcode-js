import parseInput from './parseInput';
import { part1, part2 } from './d1';

import inputSource from './d1.input.txt';

describe('2018/Day 1', () => {
  const input = parseInput(inputSource);

  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1(input)).toBe(466);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2(input)).toBe(750);
    });
  });
});
