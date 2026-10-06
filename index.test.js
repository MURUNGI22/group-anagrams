const test = require('node:test');
const assert = require('node:assert/strict');
const { groupAnagrams } = require('./index');

test('groups sample words and preserves input order', () => {
  assert.deepEqual(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']), [
    ['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat'],
  ]);
});

test('handles empty strings, duplicates, case, and Unicode', () => {
  assert.deepEqual(groupAnagrams(['', 'a', '', '😀a', 'a😀', 'A', 'a']), [
    ['', ''], ['a', 'a'], ['😀a', 'a😀'], ['A'],
  ]);
  assert.deepEqual(groupAnagrams([]), []);
  assert.throws(() => groupAnagrams(['ok', 2]), TypeError);
});

test('handles a large lowercase input', () => {
  const words = Array.from({ length: 30000 }, (_, i) => i % 2 ? 'tea' : 'eat');
  const groups = groupAnagrams(words);
  assert.equal(groups.length, 1);
  assert.equal(groups[0].length, words.length);
});
