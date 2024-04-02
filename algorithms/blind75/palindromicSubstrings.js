/*

Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.

Example 1:
Input: s = "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

Example 2:
Input: s = "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += _countSubstrings(s, i, i + 1) + _countSubstrings(s, i, i);
  }
  return count;
};

var _countSubstrings = function (s, left, right) {
  let count = 0;
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    count++;
    right++;
    left--;
  }
  return count;
};
