/*

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:
Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

Example 2:
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const freq = {};
  let res = 0;
  let left = 0;
  let right = 0;
  while (right < s.length) {
    freq[s[right]] = freq[s[right]] ? freq[s[right]] + 1 : 1;
    const length = right - left + 1;
    const maxFreq = Math.max(...Object.values(freq));
    if (length - maxFreq <= k) {
      res = Math.max(res, length);
    } else {
      freq[s[left]]--;
      left++;
    }
    right++;
  }

  return res;
};

// if we maintain a max freq we don't need to check all the frequencies to get max
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const freq = {};
  let res = 0;
  let left = 0;
  let right = 0;
  let maxFreq = 0; // if we maintain a max freq we don't need to check all the frequencies to get max
  while (right < s.length) {
    freq[s[right]] = freq[s[right]] ? freq[s[right]] + 1 : 1;
    maxFreq = Math.max(freq[s[right]], maxFreq);
    const length = right - left + 1;
    if (length - maxFreq <= k) {
      res = Math.max(res, length);
    } else {
      freq[s[left]]--;
      left++;
    }
    right++;
  }

  return res;
};
