export {part1, processList};

function part1(list, length) {
  list = processList(list, length);

  return list[0] * list[1];
}

function processList(list, lengths) {
  let currentIndex = 0;
  let skipSize = 0;

  lengths.forEach(length => {
    list = reverseSublist(list, currentIndex, length);

    currentIndex = (currentIndex + length + skipSize) % list.length;

    skipSize++;
  });

  return list;
}

function reverseSublist(list, startIndex, length) {
  const endIndex = startIndex + length - 1;

  let shift = 0;

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