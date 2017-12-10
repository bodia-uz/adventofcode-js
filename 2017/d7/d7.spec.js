import {part1, part2, parseInput} from './d7';

import input1Source from './d7.input1.txt';
import input2Source from './d7.input2.txt';

describe('2017/Day 7', () => {
  const input1 = parseInput(input1Source);
  const input2 = parseInput(input2Source);

  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1(input1)).toBe('tknk');
    });
    it('should resolve input', () => {
      expect(part1(input2)).toBe('azqje');
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2(input1)).toBe(60);
    });

    it('should resolve input', () => {
      expect(part2(input2)).toBe(646);
    });
  });
});