export const part1 = input => walk(input, increment);
export const part2 = input => walk(input, incrementOrDecrement);

function walk(maze, updateOffset) {
  let steps = 0;
  let current = 0;

  // prevent mutating source maze
  maze = [...maze];

  while (current >= 0 && current < maze.length) {
    const instruction = maze[current];

    maze[current] = updateOffset(maze[current]);

    current += instruction;
    steps += 1;
  }

  return steps;
}

function incrementOrDecrement(offset) {
  return offset < 3 ? increment(offset) : decrement(offset);
}

function increment(value) {
  return value + 1;
}

function decrement(value) {
  return value - 1;
}