/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxOperations = function (nums, k) {
  const map = new Map();
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const a = k - nums[i];
    const b = nums[i];
    if (map.has(a)) {
      if (map.get(a) === 1) map.delete(a);
      else map.set(a, map.get(a) - 1);
      count++;
    } else {
      if (map.has(b)) map.set(b, map.get(b) + 1);
      else map.set(b, 1);
    }
  }
  return count;
};

module.exports = { maxOperations };
