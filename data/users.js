const fakeNames = require('./fakenames.json');

function generateTrie(fakeFullNames) {
  const root = { value: '' }
  fakeFullNames.forEach((fullName, fullNameIndex) => {
    fullName = fullName.toLowerCase()
    if (!root[fullName[0]]) { root[fullName[0]] = {} }

    let currentNode = root[fullName[0]];
    fullName.split('').slice(1).forEach((character, index, array) => {
      if (!currentNode[character]) { currentNode[character] = {} }
      const value = index === array.length - 1 ? fullNameIndex : null;
      if (currentNode[character].value) {
        currentNode[character] = { ...currentNode[character], value: [...currentNode[character].value, value] };
      } else {
        currentNode[character] = { ...currentNode[character], value: [value] };
      }
      currentNode = currentNode[character]
    });
  })
  return root;
}

const usersTrie = generateTrie(fakeNames.slice(0, 200000));

module.exports = usersTrie;