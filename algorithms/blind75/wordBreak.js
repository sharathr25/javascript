/*

Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

Example 2:
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

Example 3:
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const dfs = (s, memo) => {
    if (s in memo) return memo[s];
    if (s === "") return true;

    for (const word of wordDict) {
      if (s.indexOf(word) === 0) {
        if (dfs(s.slice(word.length), memo)) {
          memo[s] = true;
          return true;
        }
      }
    }

    memo[s] = false;
    return false;
  };

  return dfs(s, {});
};
