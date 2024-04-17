/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
  const stack = [];
  for (let i = 0; i < asteroids.length; ) {
    if (!stack.length) stack.push(asteroids[i++]);
    else if (asteroids[i] < 0 && stack[stack.length - 1] > 0) {
      // collision
      const as = Math.abs(asteroids[i]);
      const ss = Math.abs(stack[stack.length - 1]);
      if (as === ss) {
        stack.pop();
        i++;
      } else if (as > ss) {
        stack.pop();
      } else {
        i++;
      }
    } else {
      stack.push(asteroids[i++]);
    }
  }
  return stack;
};

module.exports = { asteroidCollision };
