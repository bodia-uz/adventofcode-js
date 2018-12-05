import parseInput from './parseInput';
import { part1, part2 } from './d2';

import inputSource from './d2.input.txt';

describe('2018/Day 2', () => {
  const input = parseInput(inputSource);

  describe('part1', () => {
    it('should resolve input', () => {
      expect(part1(input)).toBe(5166);
    });
  });

  describe('part2', () => {
    it('should resolve input', () => {
      expect(part2(input)).toBe('cypueihajytordkgzxfqplbwn');
    });
  });
});
