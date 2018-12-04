function parseInput(input) {
  return input
    .trim()
    .split('\n')
    .map(value => parseInt(value.replace('+', ''), 10));
}

export default parseInput;
