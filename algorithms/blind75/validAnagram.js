/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, freq.get(ch) ? freq.get(ch) + 1 : 1);
  }

  for (const ch of t) {
    if (!freq.has(ch)) return false;

    if (freq.get(ch) === 1) freq.delete(ch);
    else freq.set(ch, freq.get(ch) - 1);
  }

  return freq.size === 0;
};
