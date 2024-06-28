var RecentCounter = function () {
  this.q = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  const range = [t - 3000, t];
  while (this.q.length && (this.q[0] < range[0] || this.q[0] > range[1])) {
    this.q.shift();
  }
  if (t >= range[0] && t <= range[1]) {
    this.q.push(t);
  }
  return this.q.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

module.exports = { RecentCounter };
