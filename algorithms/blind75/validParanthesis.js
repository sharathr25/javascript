/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];

  for (const ch of s) {
    const top = stack[stack.length - 1];
    if (ch === "(" || ch === "{" || ch === "[") stack.push(ch);
    else if (
      (ch === ")" && top === "(") ||
      (ch === "}" && top === "{") ||
      (ch === "]" && top === "[")
    )
      stack.pop();
    else return false;
  }

  return stack.length === 0;
};
