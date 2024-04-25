/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
const findDifference = function (nums1, nums2) {
  const set1 = new Set([...nums1]);
  const set2 = new Set([...nums2]);
  const res1 = new Set();
  const res2 = new Set();

  for (const num of nums1) if (!set2.has(num)) res1.add(num);
  for (const num of nums2) if (!set1.has(num)) res2.add(num);

  return [[...res1.values()], [...res2.values()]];
};

module.exports = { findDifference };
