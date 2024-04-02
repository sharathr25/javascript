/*

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]

*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const anagrams = {};
  const charCodeOfA = "a".charCodeAt(0);
  for (const str of strs) {
    const freq = new Array(26).fill(0);
    for (const ch of str) freq[ch.charCodeAt(0) - charCodeOfA]++;
    if (!anagrams[freq]) anagrams[freq] = [];
    anagrams[freq].push(str);
  }

  return Object.values(anagrams);
};

// NOTE
// when we pass an array as key to object the items of array will be joined with ,
// thats we are using to freq obj in the groupAnagrams function
const obj = {};

obj[[1, 2, 3]] = "a";

console.log(obj); // { '1,2,3': 'a' }
