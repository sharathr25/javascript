/*

Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.
Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.

*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const dfs = (s1, s2, memo) => {
    const key = `${s1},${s2}`
    if (key in memo) return memo[key]
    if (s1 === text1.length || s2 === text2.length) return 0

    if (text1[s1] === text2[s2]) {
      memo[key] = 1 + dfs(s1 + 1, s2 + 1, memo)
    } else {
      memo[key] = Math.max(dfs(s1, s2 + 1, memo), dfs(s1 + 1, s2, memo))
    }

    return memo[key]
  }

  return dfs(0, 0, {})
}
