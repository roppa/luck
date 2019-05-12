const luck = require('..')

describe('luck', () => {
  test('positive luck', () => {
    const difficulty = 336899932795
    const hashrate = 153.6 * Math.pow(10, 15)
    const minedTimeSeconds = 9172
    expect(luck({ minedTimeSeconds, difficulty, hashrate })).toEqual('102.71')
  })

  test('negative luck', () => {
    const difficulty = 336899932795
    const hashrate = 154.7 * Math.pow(10, 15)
    const minedTimeSeconds = 41579
    expect(luck({ minedTimeSeconds, difficulty, hashrate: hashrate })).toEqual('22.50')
  })
})
