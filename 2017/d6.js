balanceBlocks([0, 2, 7, 0])/*?*/
balanceBlocks([4, 1, 15, 12, 0, 9, 9, 5, 5, 8, 7, 3, 14, 5, 12, 3])/*?*/

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

  return {banks, cycles};
}

function nextBankIndex(banks, index) {
  return (
    index !== banks.length - 1
      ? index + 1
      : 0
  );
}