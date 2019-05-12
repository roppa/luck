const HASH = Math.pow(2, 32)

module.exports = function luck ({ difficulty, hashrate, minedTimeSeconds }) {
  const average = (HASH * difficulty) / hashrate
  return ((average / minedTimeSeconds) * 100).toFixed(2)
}
