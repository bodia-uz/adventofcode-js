export const part1 = input => findMaxRegisterValueAfterInstructions(input);
export const part2 = input => findMaxRegisterValueDuringInstructions(input);

export { parseInput };

const INSTRUCTION_PATTERN = /([a-z]+) (inc|dec) (-?\d+) if ([a-z]+) ([!=<>]+) (-?\d+)/;
const REGISTERS_METADATA_KEY = Symbol('REGISTERS_METADATA_KEY');

function findMaxRegisterValueAfterInstructions(instructions) {
  const registers = processInstructions(instructions);
  const values = Object.values(registers);

  return Math.max(...values);
}

function findMaxRegisterValueDuringInstructions(instructions) {
  const registers = processInstructions(instructions);
  const registersMetadata = registers[REGISTERS_METADATA_KEY];
  const maxValues = Object.values(registersMetadata).map(({ max }) => max);

  return Math.max(...maxValues);
}

function processInstructions(instructions) {
  const initialRegisters = {
    [REGISTERS_METADATA_KEY]: {},
  };

  return instructions.reduce(processInstruction, initialRegisters);
}

function processInstruction(
  registers,
  {
    instructionRegister,
    instruction,
    instructionValue,
    conditionRegister,
    condition,
    conditionValue,
  },
) {
  const conditionRegisterValue = registers[conditionRegister] || 0;
  const instructionRegisterValue = registers[instructionRegister] || 0;

  if (isCondition(condition, conditionRegisterValue, conditionValue)) {
    updateRegister(
      registers,
      instructionRegister,
      callInstruction(instruction, instructionRegisterValue, instructionValue),
    );
  }

  return registers;
}

function updateRegister(registers, register, registerValue) {
  const registersMetadata = registers[REGISTERS_METADATA_KEY];
  const { min: registerMinValue = 0, max: registerMaxValue = 0 } =
    registersMetadata[register] || {};

  registers[register] = registerValue;
  registers[REGISTERS_METADATA_KEY][register] = {
    min: Math.min(registerValue, registerMinValue),
    max: Math.max(registerValue, registerMaxValue),
  };
}

function isCondition(condition, valueA, valueB) {
  switch (condition) {
    case '<':
      return valueA < valueB;
    case '>':
      return valueA > valueB;
    case '<=':
      return valueA <= valueB;
    case '>=':
      return valueA >= valueB;
    case '==':
      return valueA === valueB;
    case '!=':
      return valueA !== valueB;
  }

  throw new TypeError(`Unknown condition '${condition}'`);
}

function callInstruction(instruction, valueA, valueB) {
  switch (instruction) {
    case 'inc':
      return valueA + valueB;
    case 'dec':
      return valueA - valueB;
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
        conditionValue,
      ] = string.match(INSTRUCTION_PATTERN).slice(1);

      return {
        instructionRegister,
        instruction,
        instructionValue: parseInt(instructionValue, 10),
        conditionRegister,
        condition,
        conditionValue: parseInt(conditionValue, 10),
      };
    });
}
