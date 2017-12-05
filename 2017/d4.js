const passPhrases = `
xnesq srsx pkzaoh cfqzugh
lntd nvxetbv clykjpd svmibpx evxtvnb yldkpjc
jsqq tzwak hephg eqwczd ioisa yim tmdifn mceip
onb eiab bno nob
mqslq scnelxv hyllrf scnelxv mqslq wmnbk
pttu kubby lgop bbyuk gsk skg ikktlbb inbyvz
`.trim().split('\n');

passPhrases.filter(isPassPhraseValid).length/*?*/;

isPassPhraseValid('aa bb cc dd ee');/*?*/
isPassPhraseValid('aa bb cc dd aa');/*?*/
isPassPhraseValid('aa bb cc dd aaa');/*?*/

function isPassPhraseValid(phrase) {
  const phraseWords = phrase.split(' ');

  for(let i = 0; i < phraseWords.length; i++) {
    for(let j = i + 1; j < phraseWords.length; j++) {
      if (phraseWords[i] === phraseWords[j]) {
        return false;
      }
    }
  }

  return true;
}