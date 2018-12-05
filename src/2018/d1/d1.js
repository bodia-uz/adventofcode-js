function calcFrequency(changes) {
  return changes.reduce((frequency, change) => frequency + change, 0);
}

function calcFrequency2(changes, result = 0, history = {}) {
  for (let change of changes) {
    history[result] = true;

    result += change;

    if (history[result]) {
      return result;
    }
  }

  return calcFrequency2(changes, result, history);
}

const part1 = input => calcFrequency(input);
const part2 = input => calcFrequency2(input);

export { part1, part2 };
