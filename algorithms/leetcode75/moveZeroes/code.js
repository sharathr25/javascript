/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  const q = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) q.push(nums[i]);
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = q.length ? q.shift() : 0;
  }
};

const moveZeroes2 = function (nums) {
  let l = 0;
  let r = 0;
  while (r < nums.length) {
    if (nums[r] === 0) {
      r++;
    } else {
      [nums[l], nums[r]] = [nums[r], nums[l]];
      l++;
      r++;
    }
  }
};

module.exports = { moveZeroes: moveZeroes2 };
