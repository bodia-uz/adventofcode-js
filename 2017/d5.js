// part 1
walk([0, 3, 0, 1, -3])/*?*/

// part 2
walk([0, 3, 0, 1, -3], updateOffset)/*?*/

function walk(maze, updateOffset = increment) {
  let steps = 0;
  let current = 0;

  // prevent mutating source maze
  maze = [...maze];

  while (current >= 0 && current <= maze.length - 1) {
    const instruction = maze[current];

    maze[current] = updateOffset(maze[current]);

    current += instruction;
    steps += 1;
  }

  return steps;
}

function updateOffset(offset) {
  return offset < 3 ? increment(offset) : decrement(offset);
}

function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}