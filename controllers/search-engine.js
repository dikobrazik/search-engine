const usersTrie = require('../data/users');
const fakeFullNames = require('../data/fakenames.json');

function findWordEntry(trie, word) {
  if (!word) { return fakeFullNames.slice(0, 10); }
  const entries = [];
  const trieCopy = { ...trie };

  const search = (trie, word) => {
    if (trie) {
      if (trie.value && trie.value.length) {
        trie.value.forEach((userIndex) => fakeFullNames[userIndex] && entries.push(fakeFullNames[userIndex]));
      }
      if (word.length > 0) {
        if (trie[word[0]]) {
          search(trie[word[0]], word ? word.slice(1) : '')
        }
      } else {
        for (let key in trie) {
          if (key !== 'value') {
            search(trie[key], word ? word.slice(1) : '')
          }
        }
      }
    }
  }
  search(trieCopy[word[0]], word ? word.slice(1) : '')
  return entries
}

module.exports = (word) => findWordEntry(usersTrie, word).slice(0, 10);