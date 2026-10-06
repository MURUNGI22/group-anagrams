# Group anagrams

Run `node group-anagrams/index.js eat tea tan ate nat bat` from the repository root. It prints `[["eat","tea","ate"],["tan","nat"],["bat"]]`. The function `groupAnagrams(words)` accepts an array and is exported for other code.

Lowercase English words use a 26-counter signature, giving O(total characters) time and O(number of words plus groups) space. Other strings use sorted Unicode code points as a fallback. Group and word order follow first appearance in the input. Matching is case sensitive.

Run tests with `node --test group-anagrams/index.test.js`.
