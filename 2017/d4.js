export const part1 = input => isPassPhraseValid(input, isDuplicate);
export const part2 = input => isPassPhraseValid(input, isAnagram);

function isPassPhraseValid(phrase, isDuplicate) {
  const phraseWords = phrase.split(' ');

  for(let i = 0; i < phraseWords.length; i++) {
    for(let j = i + 1; j < phraseWords.length; j++) {
      if (isDuplicate(phraseWords[i], phraseWords[j])) {
        return false;
      }
    }
  }

  return true;
}

function isDuplicate(word1, word2) {
  return word1 === word2;
}

function isAnagram(word1, word2) {
  return sortCharacters(word1) === sortCharacters(word2);
}

function sortCharacters(word) {
  return word.split('').sort().join();
}