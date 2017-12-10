export const part1 = (input) => calcGroups(input).groupsScore;

const Token = {
  GROUP_OPEN: '{',
  GROUP_CLOSE: '}',
  GARBAGE_OPEN: '<',
  GARBAGE_CLOSE: '>',
  GARBAGE_IGNORE: '!',
};

function calcGroups(input) {
  const tokens = input.split('');

  let groupIndex = 0;
  let garbageIndex = 0;
  let garbageIgnoreIndex = 0;

  let groupsCount = 0;
  let groupsScore = 0;

  tokens.forEach(token => {
    if (garbageIndex) {
      if (garbageIgnoreIndex) {
        garbageIgnoreIndex--;
        return;
      }

      switch (token) {
        case Token.GARBAGE_IGNORE:
          garbageIgnoreIndex++;
          break;

        case Token.GARBAGE_CLOSE:
          garbageIndex--;
          break;
      }

      return;
    }

    switch (token) {
      case Token.GARBAGE_OPEN:
        garbageIndex++;
        break;

      case Token.GROUP_OPEN:
        groupIndex++;
        break;

      case Token.GROUP_CLOSE:
        groupIndex--;
        groupsScore += groupIndex + 1;
        groupsCount++;
        break;
    }
  });

  return {
    groupsCount,
    groupsScore
  };
}