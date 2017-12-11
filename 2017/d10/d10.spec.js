import {part1, part2} from './d10';

import inputSource from './d10.input.txt';

describe('2017/Day 10', () => {
  describe('part1', () => {
    const inputArray = Array.from(Array(256).keys());
    const inputLengths = inputSource
      .split(',')
      .map(value => parseInt(value, 10));

    it('should resolve examples', () => {
      expect(part1([0, 1, 2, 3, 4], [3, 4, 1, 5])).toBe(12);
    });
    it('should resolve input', () => {
      expect(part1(inputArray, inputLengths)).toBe(23874);
    });
  });

  describe('part1', () => {
    const input = inputSource.trim();

    it('should resolve examples', () => {
      expect(part2('')).toEqual('a2582a3a0e66e6e86e3812dcb672a272');
      expect(part2('AoC 2017')).toEqual('33efeb34ea91902bb2f59c9920caa6cd');
      expect(part2('1,2,3')).toEqual('3efbe78a8d82f29979031a4aa0b16a9d');
      expect(part2('1,2,4')).toEqual('63960835bcdc130f0b66d7ff4f6a5a8e');
    });
    it('should resolve input', () => {
      expect(part2(input)).toEqual('e1a65bfb5a5ce396025fab5528c25a87');
    });
  });
});