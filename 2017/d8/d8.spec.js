import {part1, parseInput} from './d8';

import input1Source from './d8.input1.txt';
import input2Source from './d8.input2.txt';

describe('2017/Day 8', () => {
  const input1 = parseInput(input1Source);
  const input2 = parseInput(input2Source);

  describe('part1', () => {
    it('should resolve example', () => {
      expect(part1(input1)).toBe(1);
    });
    it('should resolve input', () => {
      expect(part1(input2)).toBe(4888);
    });
  });
});