/** Group words by their character counts, preserving input order within each group. */
function groupAnagrams(words) {
  if (!Array.isArray(words)) throw new TypeError('Input must be an array of strings.');
  const groups = new Map();

  for (const word of words) {
    if (typeof word !== 'string') throw new TypeError('Every item must be a string.');
    let key;

    if (/^[a-z]*$/.test(word)) {
      // The common lowercase English case takes O(word length) time.
      const counts = new Array(26).fill(0);
      for (let i = 0; i < word.length; i++) {
        counts[word.charCodeAt(i) - 97]++;
      }
      key = `lower:${counts.join(',')}`;
    } else {
      // Sorting also supports mixed case, punctuation, and Unicode code points.
      key = `other:${Array.from(word).sort().join('')}`;
    }

    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(word);
  }

  return [...groups.values()];
}

if (require.main === module) {
  if (process.argv.length < 3) {
    console.error('Usage: node index.js eat tea tan ate nat bat');
    process.exitCode = 1;
  } else {
    console.log(JSON.stringify(groupAnagrams(process.argv.slice(2))));
  }
}

module.exports = { groupAnagrams };
