export const part1 = input => processStream(input).groupsScore;
export const part2 = input => processStream(input).garbageCharactersCount;

const Token = {
  GROUP_OPEN: '{',
  GROUP_CLOSE: '}',
  GARBAGE_OPEN: '<',
  GARBAGE_CLOSE: '>',
  GARBAGE_IGNORE: '!',
};

function processStream(stream) {
  const tokens = stream.split('');
  const initialStreamState = {
    groupIndex: 0,
    groupsCount: 0,
    groupsScore: 0,
    garbageCharactersCount: 0,
    isWithinGarbage: false,
    isWithinGarbageIgnore: false,
  };

  return tokens.reduce(
    (streamState, token) => processStreamToken(streamState, token),
    initialStreamState,
  );
}

function processStreamToken(streamState, token) {
  if (streamState.isWithinGarbage) {
    return processStreamGarbageToken(streamState, token);
  }

  switch (token) {
    case Token.GARBAGE_OPEN:
      return {
        ...streamState,
        isWithinGarbage: true,
      };

    case Token.GROUP_OPEN:
      return {
        ...streamState,
        groupIndex: streamState.groupIndex + 1,
      };

    case Token.GROUP_CLOSE:
      return {
        ...streamState,
        groupsScore: streamState.groupsScore + streamState.groupIndex,
        groupsCount: streamState.groupsCount + 1,
        groupIndex: streamState.groupIndex - 1,
      };
  }

  return streamState;
}

function processStreamGarbageToken(streamState, token) {
  if (streamState.isWithinGarbageIgnore) {
    // ignore all tokens after ignore (!) token
    return {
      ...streamState,
      isWithinGarbageIgnore: false,
    };
  }

  switch (token) {
    case Token.GARBAGE_IGNORE:
      return {
        ...streamState,
        isWithinGarbageIgnore: true,
      };

    case Token.GARBAGE_CLOSE:
      return {
        ...streamState,
        isWithinGarbage: false,
      };

    default:
      return {
        ...streamState,
        garbageCharactersCount: streamState.garbageCharactersCount + 1,
      };
  }
}
