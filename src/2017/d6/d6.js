export const part1 = input => balanceBlocks(input).cycles;
export const part2 = input => balanceBlocks(input).cyclesToLoop;

function balanceBlocks(banks) {
  const history = [];
  let cycles = 0;

  // prevent mutating source
  banks = [...banks];

  do {
    const maxBlocks = Math.max(...banks);
    const maxBlocksIndex = banks.findIndex(banks => banks === maxBlocks);

    let bankIndex = nextBankIndex(banks, maxBlocksIndex);
    let bankBlocks = maxBlocks;

    history.push(banks.toString());
    banks[maxBlocksIndex] = 0;

    while (bankBlocks > 0) {
      banks[bankIndex]++;

      bankBlocks--;
      bankIndex = nextBankIndex(banks, bankIndex);
    }

    cycles++;
  } while (!history.includes(banks.toString()));

  return {
    banks,
    cycles,
    cyclesToLoop: cycles - history.indexOf(banks.toString())
  };
}

function nextBankIndex(banks, index) {
  return (
    index !== banks.length - 1
      ? index + 1
      : 0
  );
}