export const part1 = input => createGroupsMap(input).get(0).length;
export const part2 = input => createGroupsMap(input).size;

export {
  createConnectionsMap as parseInput
};

const CONNECTION_PATTERN = /(\d+) <-> ([\d,\s]+)/;

function createGroupsMap(connectionMap) {
  const groupsMap = new Map();
  const processedKeys = [];

  let key = 0;

  while (connectionMap.has(key)) {
    const keyConnections = getKeyConnections(key, connectionMap);

    groupsMap.set(key, keyConnections);
    processedKeys.push(key, ...keyConnections);

    do {
      key++;
    } while (processedKeys.includes(key));
  }

  return groupsMap;
}

function getKeyConnections(key, connectionMap, processedKeys = []) {
  if (processedKeys.includes(key)) {
    return [];
  }

  const keyDirectConnections = connectionMap.get(key);
  const keyConnections = [...keyDirectConnections];

  keyDirectConnections.forEach(_key => {
    getKeyConnections(_key, connectionMap, processedKeys.concat(key))
      .forEach(__key => {
        if (!keyConnections.includes(__key)) {
          keyConnections.push(__key);
        }
      });

  });

  return keyConnections;
}

function createConnectionsMap(input) {
  const initialConnectionsMap = new Map();

  return input
    .trim()
    .split('\n')
    .reduce((connectionsMap, string) => {
      let [key, keyConnections] = string.match(CONNECTION_PATTERN).slice(1);

      key = parseInt(key, 10);
      keyConnections = keyConnections.split(', ').map(k => parseInt(k, 10));

      connectionsMap.set(key, keyConnections);

      return connectionsMap;
    }, initialConnectionsMap);
}