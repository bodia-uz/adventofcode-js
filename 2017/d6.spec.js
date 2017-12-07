import {part1, part2} from './d6';

describe('2017/Day 6', () => {
  const input1 = [0, 2, 7, 0];
  const input2 = [4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3];

  describe('part1', () => {
    it(`should resolve ${input1}`, () => {
      expect(part1(input1)).toBe(5);
    });

    it(`should resolve ${input2}`, () => {
      expect(part1(input2)).toBe(6681);
    });
  });

  describe('part2', () => {
    it(`should resolve ${input1}`, () => {
      expect(part2(input1)).toBe(4);
    });

    it(`should resolve ${input2}`, () => {
      expect(part2(input2)).toBe(2392);
    });
  });
});