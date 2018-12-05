import { part1, part2 } from './d11';

import inputSource from './d11.input.txt';

describe('2017/Day 11', () => {
  const inputDirections = inputSource.trim().split(',');

  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1(['ne', 'ne', 'ne'])).toBe(3);
      expect(part1(['ne', 'ne', 'sw', 'sw'])).toBe(0);
      expect(part1(['ne', 'ne', 's', 's'])).toBe(2);
      expect(part1(['se', 'sw', 'se', 'sw', 'sw'])).toBe(3);
      expect(part1(['se', 'sw', 'se', 'sw', 'sw', 'sw'])).toBe(4);
    });
    it('should resolve input', () => {
      expect(part1(inputDirections)).toBe(747);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2(['ne', 'ne', 'ne'])).toBe(3);
      expect(part2(['ne', 'ne', 'sw', 'sw'])).toBe(2);
      expect(part2(['ne', 'ne', 's', 's'])).toBe(2);
      expect(part2(['se', 'sw', 'se', 'sw', 'sw'])).toBe(3);
      expect(part2(['se', 'sw', 'se', 'sw', 'sw', 'sw'])).toBe(4);
    });
    it('should resolve input', () => {
      expect(part2(inputDirections)).toBe(1544);
    });
  });
});
