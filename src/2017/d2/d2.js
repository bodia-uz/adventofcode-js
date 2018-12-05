export const part1 = input => getCheckSum(input, getMinMaxCheckSum);
export const part2 = input => getCheckSum(input, getEvenlyDivisibleCheckSum);

function getCheckSum(spreadsheet, getRowCheckSum) {
  return spreadsheet.reduce((sum, row) => sum + getRowCheckSum(row), 0);
}

function getMinMaxCheckSum(array) {
  const min = Math.min(...array);
  const max = Math.max(...array);

  return max - min;
}

function getEvenlyDivisibleCheckSum(array) {
  for (let i = 0; i < array.length; i++) {
    const firstValue = parseInt(array[i], 10);

    for (let j = i + 1; j < array.length; j++) {
      const secondValue = parseInt(array[j], 10);

      if (firstValue % secondValue === 0) {
        return firstValue / secondValue;
      }

      if (secondValue % firstValue === 0) {
        return secondValue / firstValue;
      }
    }
  }
}
