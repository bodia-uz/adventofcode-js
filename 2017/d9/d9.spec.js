import {part1} from './d9';

import input from './d9.input.txt';

describe('2017/Day 9', () => {
  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1('{}')).toBe(1);
      expect(part1('{{{}}}')).toBe(6);
      expect(part1('{{},{}}')).toBe(5);
      expect(part1('{{{},{},{{}}}}')).toBe(16);
      expect(part1('{<{},{},{{}}>}')).toBe(1);
      expect(part1('{<a>,<a>,<a>,<a>}')).toBe(1);
      expect(part1('{{<a>},{<a>},{<a>},{<a>}}')).toBe(9);
      expect(part1('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9);
      expect(part1('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
      expect(part1('{{<!>},{<!>},{<!>},{<a>}}')).toBe(3);
      expect(part1('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
    });
    it('should resolve input', () => {
      expect(part1(input)).toBe(17537);
    });
  });
});