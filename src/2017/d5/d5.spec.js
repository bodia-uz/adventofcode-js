import {part1, part2} from './d5';

describe('2017/Day 5', () => {
  const input = [0, 3, 0, 1, -3];

  describe('part1', () => {
    it(`should resolve ${input}`, () => {
      expect(part1(input)).toBe(5);
    });
  });

  describe('part2', () => {
    it(`should resolve ${input}`, () => {
      expect(part2(input)).toBe(10);
    });
  });
});