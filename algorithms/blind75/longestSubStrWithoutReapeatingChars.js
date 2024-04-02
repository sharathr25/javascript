/*

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0;
  let subStr = "";

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const index = subStr.indexOf(ch);
    if (index !== -1) {
      subStr = subStr.substring(index + 1, i);
    }
    subStr += ch;
    max = Math.max(max, subStr.length);
  }

  return max;
};
