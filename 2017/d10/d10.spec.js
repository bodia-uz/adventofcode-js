import {part1, processList} from './d10';

import inputSource from './d10.input.txt';

describe('2017/Day 9', () => {
  const inputArray = Array.from(Array(256).keys());
  const inputLengths = inputSource
    .split(',')
    .map(value => parseInt(value, 10));

  describe('part1', () => {
    it('should resolve examples', () => {
      expect(processList([0, 1, 2, 3, 4], [3, 4, 1, 5])).toEqual([3, 4, 2, 1, 0]);
      expect(part1([0, 1, 2, 3, 4], [3, 4, 1, 5])).toBe(12);
    });
    it('should resolve input', () => {
      expect(part1(inputArray, inputLengths)).toBe(23874);
    });
  });
});