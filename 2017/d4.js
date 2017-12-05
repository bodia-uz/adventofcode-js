const passPhrases = `
xnesq srsx pkzaoh cfqzugh
lntd nvxetbv clykjpd svmibpx evxtvnb yldkpjc
jsqq tzwak hephg eqwczd ioisa yim tmdifn mceip
onb eiab bno nob
mqslq scnelxv hyllrf scnelxv mqslq wmnbk
pttu kubby lgop bbyuk gsk skg ikktlbb inbyvz
`.trim().split('\n');

// part 1
passPhrases.filter(phrase => isPassPhraseValid(phrase)).length/*?*/;

isPassPhraseValid('aa bb cc dd ee');/*?*/
isPassPhraseValid('aa bb cc dd aa');/*?*/
isPassPhraseValid('aa bb cc dd aaa');/*?*/

// part 2
passPhrases.filter(phrase => isPassPhraseValid(phrase, true)).length/*?*/;

isPassPhraseValid('abcde fghij', true);/*?*/
isPassPhraseValid('abcde xyz ecdab', true);/*?*/
isPassPhraseValid('a ab abc abd abf abj', true);/*?*/
isPassPhraseValid('iiii oiii ooii oooi oooo', true);/*?*/
isPassPhraseValid('oiii ioii iioi iiio', true);/*?*/

function isPassPhraseValid(phrase, isAnagramForbidden = false) {
  const phraseWords = phrase.split(' ');

  for(let i = 0; i < phraseWords.length; i++) {
    for(let j = i + 1; j < phraseWords.length; j++) {
      if (isDuplicate(phraseWords[i], phraseWords[j], isAnagramForbidden)) {
        return false;
      }
    }
  }

  return true;
}

function isDuplicate(word1, word2, isAnagramForbidden) {
  return (
    isAnagramForbidden
      ? isAnagram(word1, word2)
      : word1 === word2
  )
}

function isAnagram(word1, word2) {
  return sortCharacters(word1) === sortCharacters(word2);
}

function sortCharacters(word) {
  return word.split('').sort().join();
}