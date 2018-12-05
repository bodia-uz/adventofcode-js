import { part1, part2 } from './d4';

const inputs = `
xnesq srsx pkzaoh cfqzugh
lntd nvxetbv clykjpd svmibpx evxtvnb yldkpjc
jsqq tzwak hephg eqwczd ioisa yim tmdifn mceip
onb eiab bno nob
mqslq scnelxv hyllrf scnelxv mqslq wmnbk
pttu kubby lgop bbyuk gsk skg ikktlbb inbyvz
`
  .trim()
  .split('\n');

describe('2017/Day 4', () => {
  describe('part1', () => {
    it('should resolve examples', () => {
      expect(part1('aa bb cc dd ee')).toBe(true);
      expect(part1('aa bb cc dd aa')).toBe(false);
      expect(part1('aa bb cc dd aaa')).toBe(true);
    });

    it('should resolve input', () => {
      expect(inputs.filter(input => part1(input)).length).toBe(5);
    });
  });

  describe('part2', () => {
    it('should resolve examples', () => {
      expect(part2('abcde fghij')).toBe(true);
      expect(part2('abcde xyz ecdab')).toBe(false);
      expect(part2('a ab abc abd abf abj')).toBe(true);
      expect(part2('iiii oiii ooii oooi oooo')).toBe(true);
      expect(part2('oiii ioii iioi iiio')).toBe(false);
    });

    it('should resolve input', () => {
      expect(inputs.filter(input => part2(input)).length).toBe(2);
    });
  });
});
