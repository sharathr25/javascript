/*

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"

*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0
  let start = 0
  let end = 0
  for (let i = 0; i < s.length - 1; i++) {
    const [start1, end1, len1] = getPalindromeOffsets(s, i, i + 1)
    const [start2, end2, len2] = getPalindromeOffsets(s, i, i)
    if (len1 > len2) {
      if (len1 > max) {
        max = len1
        start = start1
        end = end1
      }
    } else {
      if (len2 > max) {
        max = len2
        start = start2
        end = end2
      }
    }
  }
  return s.substring(start, end + 1)
}

var getPalindromeOffsets = function (s, left, right) {
  while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
    left--
    right++
  }
  return [left + 1, right - 1, right - left]
}
