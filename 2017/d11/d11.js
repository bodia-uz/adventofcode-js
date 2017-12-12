export const part1 = input => getSteps(getPath(input));
export const part2 = input => getMaxSteps(getPath(input));

//   \ n  /
// nw +--+ ne
//   /    \
// -+  ??  +-
//   \    /
// sw +--+ se
//   / s  \

//       | NW  |  N  |          | 0, 1| 1, 1|
// | SW  | ??  | NE  | => |-1, 0|  ?? | 1, 0|
// |  S  | SE  |          |-1,-1| 0,-1|

const DIRECTIONS_MAP = {
  'ne': [1, 0],
  'nw': [0, 1],
  'n': [1, 1],
  'sw': [-1, 0],
  's': [-1, -1],
  'se': [0, -1]
};

const PATH_HISTORY = Symbol('POSITION_METADATA');

function getMaxSteps(path) {
  return path[PATH_HISTORY]
    .reduce((maxSteps, path) =>
      Math.max(maxSteps, getSteps(path)),
      0
    );
}

function getSteps(path) {
  // steps count is sum of diagonal (N,S) steps
  // and horizontal (SW, NE) or vertical (NW,SE) steps
  // steps = horizontal or vertical steps + diagonal steps
  // steps = (max(x, y) - getDiagonalSteps(path)) + getDiagonalSteps(path)
  // steps = max(x, y)
  return Math.max(
    Math.abs(path.x),
    Math.abs(path.y)
  );
}

function getPath(directions) {
  const initialPath = {x: 0, y: 0};

  initialPath[PATH_HISTORY] = [];

  return directions
    .reduce((path, direction) => {
      const [directionX, directionY] = DIRECTIONS_MAP[direction];

      path.x += directionX;
      path.y += directionY;

      path[PATH_HISTORY].push({
        x: path.x,
        y: path.y
      });

      return path;
    }, initialPath)
}