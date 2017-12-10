export const part1 = input => findMaxRegisterValueAfterInstructions(input);

export {
  parseInput
}

const INSTRUCTION_PATTERN = /([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) ([!=<>]+) (-?\d+)/;

function findMaxRegisterValueAfterInstructions(instructions) {
  const registers = processInstructions(instructions);
  const values = Object.values(registers);

  return Math.max(...values);
}

function processInstructions(instructions) {
  const initialRegisters = {};

  return instructions.reduce(processInstruction, initialRegisters);
}

function processInstruction(registers, {
  instructionRegister,
  instruction,
  instructionValue,
  conditionRegister,
  condition,
  conditionValue
}) {
  const conditionRegisterValue = registers[conditionRegister] || 0;
  const instructionRegisterValue = registers[instructionRegister] || 0;

  if (
    isCondition(
      condition,
      conditionRegisterValue,
      conditionValue
    )
  ) {
    registers[instructionRegister] = callInstruction(
      instruction,
      instructionRegisterValue,
      instructionValue
    );
  }

  return registers;
}

function isCondition(condition, valueA, valueB) {
  switch (condition) {
    case '<': return valueA < valueB;
    case '>': return valueA > valueB;
    case '<=': return valueA <= valueB;
    case '>=': return valueA >= valueB;
    case '==': return valueA === valueB;
    case '!=': return valueA !== valueB;
  }

  throw new TypeError(`Unknown condition '${condition}'`);
}

function callInstruction(instruction, valueA, valueB) {
  switch (instruction) {
    case 'inc': return valueA + valueB;
    case 'dec': return valueA - valueB;
  }

  throw new TypeError(`Unknown instruction '${instruction}'`);
}

function parseInput(input) {

  return input
    .trim()
    .split('\n')
    .map(string => {
      const [
        instructionRegister,
        instruction,
        instructionValue,
        conditionRegister,
        condition,
        conditionValue
      ] = string.match(INSTRUCTION_PATTERN).slice(1);

      return {
        instructionRegister,
        instruction,
        instructionValue: parseInt(instructionValue, 10),
        conditionRegister,
        condition,
        conditionValue: parseInt(conditionValue, 10)
      };
    });
}