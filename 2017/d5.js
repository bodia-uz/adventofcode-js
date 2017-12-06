walk([0, 3, 0, 1, -3])/*?*/

function walk(maze) {
  let steps = 0;
  let current = 0;

  while (current >= 0 && current <= maze.length - 1) {
    const instruction = maze[current];

    maze[current]++;

    current += instruction;
    steps += 1;
  }

  return steps;
}