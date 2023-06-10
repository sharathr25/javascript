/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:
Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:
Input: coins = [2], amount = 3
Output: -1

Example 3:
Input: coins = [1], amount = 0
Output: 0

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount, memo = {}) {
  if (amount in memo) return memo[amount]
  if (amount === 0) return 0
  if (amount < 0) return -1

  let minCount = Infinity
  for (const coin of coins) {
    const res = coinChange(coins, amount - coin, memo) + 1
    if (res > 0) {
      minCount = Math.min(res, minCount)
    }
  }
  memo[amount] = minCount
  return minCount
}
