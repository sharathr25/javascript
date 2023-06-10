/*

Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, 
and return an array of the non-overlapping intervals that cover all the intervals in the input.

Example 1:
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

Example 2:
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const res = []

  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    const [x, y] = prev
    const [a, b] = intervals[i]
    if (a <= y) {
      prev = [Math.min(x, a), Math.max(y, b)]
    } else {
      res.push(prev)
      prev = [a, b]
    }
  }

  res.push(prev) // push last item

  return res
}
