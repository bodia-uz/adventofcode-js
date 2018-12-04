export const part1 = input => findRootTower(input).name;
export const part2 = input => findUnbalancedTower(buildTower(input)).balancedWeight;

export {
  parseInput
}

function findUnbalancedTower(tower, unbalancedTowerParent) {
  const unbalancedTower = tower
    .children
    .find(t => tower.children.filter(c => c.weightSum === t.weightSum).length === 1);

  if (unbalancedTower && unbalancedTower.children.length) {
    return findUnbalancedTower(unbalancedTower, tower);
  }

  // if `tower` is unbalanced and `tower` children are balanced,
  // then `tower.weight` is unbalanced
  if (unbalancedTowerParent) {
    const unbalancedTowerSibling = unbalancedTowerParent
      .children.find(t => t !== tower);

    // find valid (balanced) tower weight
    const balancedWeight = (
      tower.weight - (tower.weightSum - unbalancedTowerSibling.weightSum)
    );

    return {
      tower,
      towerParent: unbalancedTowerParent,
      balancedWeight
    };
  }
}

function buildTower(towers) {
  const towersByName = new Map(towers.map(tower => [tower.name, tower]));
  const root = findRootTower(towers);

  return buildTowerWithTowersMap(root, towersByName);
}

function findRootTower(towers) {
  const towersWithChildren = towers
    .filter(tower => tower.children.length);

  return towersWithChildren.find(tower => (
    tower.children &&
    tower.children.length &&
    !towersWithChildren.some(t1 =>
      t1.children.some(t2 => t2.name === tower.name)
    )
  ));
}

function buildTowerWithTowersMap(tower, towersByName) {
  return {
    ...tower,
    children: tower
      .children
      .map(t => {
        t = buildTowerWithTowersMap(towersByName.get(t.name), towersByName);
        t.weightSum = getTowerWeightSum(t);
        return t;
      })
  }
}

function getTowerWeightSum(tower) {
  return tower
    .children
    .reduce((sum, t) => sum + getTowerWeightSum(t), tower.weight)
}

function parseInput(input) {
  const PATTERN = /(\w+) \((\d+)\)(?: -> )?([a-z, ]+)?/;

  return input
    .trim()
    .split('\n')
    .map(string => {
      const [name, weight, children] = string.match(PATTERN).slice(1);

      return {
        name,
        weight: parseInt(weight, 10),
        children: (
          children
            ? children.split(', ').map(name => ({ name }))
            : []
        )
      };
    });
}