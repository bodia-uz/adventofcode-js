function calcAppearances(ids) {
  const repeatsMap = new Map();

  ids.forEach(id => {
    const charMap = new Map();
    const repeatsSet = new Set();

    id.split('').forEach(char => {
      charMap.set(char, (charMap.get(char) || 0) + 1);
    });

    charMap.forEach(count => {
      if (!repeatsSet.has(count)) {
        repeatsSet.add(count);
        repeatsMap.set(count, (repeatsMap.get(count) || 0) + 1);
      }
    });
  });

  return repeatsMap.get(2) * repeatsMap.get(3);
}

function compare(str1, str2) {
  const str1Array = str1.split('');
  const str2Array = str2.split('');
  const strCommonArray = [];

  for (let i = 0; i < str1Array.length; i++) {
    if (str1Array[i] === str2Array[i]) {
      strCommonArray.push(str1Array[i]);
    }
  }

  return {
    common: strCommonArray.join(''),
    difference: str1Array.length - strCommonArray.length,
  };
}

function find(strings) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      let compareResult = compare(strings[i], strings[j]);
      if (compareResult.difference === 1) {
        console.log(compareResult);
        return compareResult.common;
      }
    }
  }
}

const part1 = input => calcAppearances(input);
const part2 = input => find(input);

export { part1, part2 };
