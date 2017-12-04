// 17  16  15  14  13
// 18   5   4   3  12
// 19   6   1   2  11
// 20   7   8   9  10
// 21  22  23---> ...

distance(6);/*?*/
distance(8);/*?*/
distance(9);/*?*/
distance(11);/*?*/
distance(13);/*?*/
distance(15);/*?*/
distance(23);/*?*/
distance(1024);/*?*/
distance(347991);/*?*/

function distance(number) {
  const [hSteps, vSteps] = getPathFromNumberToCenter(number);

  // add path steps
  const steps = Math.abs(hSteps) + Math.abs(vSteps);

  return [[hSteps, vSteps], steps];
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
  return (
    numberStepsToSquare <= maxStepsToRight
      ? [numberSquarePath[0] - numberStepsToSquare, numberSquarePath[1]]
      : [numberSquarePath[0] - maxStepsToRight, numberSquarePath[1] - (numberStepsToSquare - maxStepsToRight)]
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
