import parseInput from './parseInput';
import {part1, part2} from './d1';

import input1Source from './d1.input1.txt';

describe.only('2018/Day 1', () => {
  const input1 = parseInput(input1Source);

  console.log(input1);

  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1(input1)).toBe(466);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2(input1)).toBe(750);
    });
  });
});