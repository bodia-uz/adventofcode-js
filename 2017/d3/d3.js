export const part1 = input => distance(input);
export const part2 = input => getSumMoreThen(input);

// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

// 147  142  133  122   59
// 304    5    4    2   57
// 330   10    1    1   54
// 351   11   23   25   26
// 362  747  806--->   ...

function distance(number) {
  const [hSteps, vSteps] = getPathFromNumberToCenter(number);

  // add path steps
  const steps = Math.abs(hSteps) + Math.abs(vSteps);

  return steps;
}

function getSumMoreThen(maxValue) {
  let number = 1;
  let sum = 1;

  while (sum <= maxValue) {
    number++;
    sum = getCell(number).sum;
  }

  return sum;
}

function getCell(number) {
  const cellsByNumber = getCell._cellsByNumber = getCell._cellsByNumber || new Map();

  if (!cellsByNumber.has(number)) {
    const path = getPathFromNumberToCenter(number);
    const cell = {
      number: number,
      path: path,
      sum: calcCellSum(number, path)
    };

    cellsByNumber.set(cell.number, cell);
  }

  return cellsByNumber.get(number);
}

function calcCellSum(number, path) {
  if (number <= 2) {
    return 1;
  }

  const prevCells = Array
    .from({ length: number - 1})
    .map((_, index) => getCell(index + 1));

  // all first 4 cells are adjacent.
  // other cells should be in distance 1 step (or 2 for diagonal)
  const adjacentCells = (
    number <= 4
      ? prevCells
      : prevCells
        .filter(cell => (
          Math.abs(cell.path[0] - path[0]) <= 1 &&
          Math.abs(cell.path[1] - path[1]) <= 1
        ))
  );

  return adjacentCells.reduce((sum, cell) => sum + cell.sum, 0);
}

/**
 * path from number to `1`
 * @param {number} number
 * @returns {number[]} [hSteps, vSteps]
 */
function getPathFromNumberToCenter(number) {
  // get nearest number square root (ex. `sqrt(16)` is square number for `sqrt(13)`)
  const numberSquareRoot = Math.ceil(Math.sqrt(number));
  const numberSquarePath = getPathFromSquareToCenter(numberSquareRoot);
  const numberSquare = numberSquareRoot * numberSquareRoot;

  // ex. `16 - 13`, `16 - 10`, `9 - 7`, ...
  const numberStepsToSquare = numberSquare - number;
  // for `16`, max steps to right is `sqrt(16) - 1`
  const maxStepsToRight = numberSquareRoot - 1;

  // subtract `steps to square` from `path from square to center`
  const path = (
    numberStepsToSquare <= maxStepsToRight
      ? [numberSquarePath[0] - numberStepsToSquare, numberSquarePath[1]]
      : [numberSquarePath[0] - maxStepsToRight, numberSquarePath[1] - (numberStepsToSquare - maxStepsToRight)]
  );

  return (
    numberSquareRoot % 2 !== 0
      ? [-path[0], -path[1]]
      : path
  );
}

/**
 * path from square number (ex. `9` or `16`) to `1`
 * @param {number} numberSquareRoot
 * @returns {number[]} [hSteps, vSteps]
 */
function getPathFromSquareToCenter(numberSquareRoot) {
  const numberSquareRootHalf = Math.floor(numberSquareRoot / 2);

  return (
    numberSquareRoot % 2 === 0
      ? [numberSquareRootHalf - 1, numberSquareRootHalf]
      : [numberSquareRootHalf, numberSquareRootHalf]
  );
}
