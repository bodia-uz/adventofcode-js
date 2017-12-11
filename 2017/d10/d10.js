export {part1, part2};

function part1(list, length) {
  list = processList(list, length);

  return list[0] * list[1];
}

function part2(input) {
  return getKnotHash(input);
}

function getKnotHash(string) {
  return getDenseHash(getSparseHash(string))
    .reduce((acc, value) => {
      const valueHash = value
        .toString(16)
        .padStart(2, 0);

      return acc + valueHash;
    }, '');
}

function getDenseHash(sparseHash) {
  const denseHash = [];
  const blocksCount = 16;
  const blockSize = 16;

  let blockIndex = 0;

  while (blockIndex < blocksCount) {
    denseHash.push(
      sparseHash
        .slice(
          blockIndex * blockSize,
          blockIndex * blockSize + blockSize
        )
        .reduce((sum, value) => sum ^ value, 0)
    );

    blockIndex++;
  }

  return denseHash;
}

function getSparseHash(string) {
  const lengths = getSparseHashLength(string);
  const list = Array.from(Array(256).keys());

  return processList(list, lengths, 64)
}

function processList(list, lengths, rounds = 1) {
  let currentIndex = 0;
  let skipSize = 0;

  while (rounds) {
    lengths.forEach(length => {
      list = reverseSublist(list, currentIndex, length);

      currentIndex = (currentIndex + length + skipSize) % list.length;

      skipSize++;
    });

    rounds--;
  }

  return list;
}

function reverseSublist(list, startIndex, length) {
  const endIndex = startIndex + length - 1;

  let shift = 0;

  // prevent mutation source list
  list = [...list];

  while (shift < length / 2) {
    const indexA = (startIndex + shift) % list.length;
    const indexB = (endIndex - shift) % list.length;

    const valueA = list[indexA];

    list[indexA] = list[indexB];
    list[indexB] = valueA;

    shift++;
  }

  return list;
}

function getSparseHashLength(string) {
  return string
    .split('')
    .map(char => char.charCodeAt(0))
    .concat([17, 31, 73, 47, 23])
}
