/**
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
  const q = [...senate];
  let radiantVotes = 0;
  let direVotes = 0;

  while (q.length > 1) {
    const vote = q.shift();
    if (vote === "R") {
      if (direVotes === 0) {
        q.push(vote);
        radiantVotes++;
        if (radiantVotes === q.length) break;
      } else {
        direVotes--;
      }
    } else {
      if (radiantVotes == 0) {
        q.push(vote);
        direVotes++;
        if (direVotes === q.length) break;
      } else {
        radiantVotes--;
      }
    }
  }

  return q[0] === "R" ? "Radiant" : "Dire";
};

module.exports = { predictPartyVictory };
