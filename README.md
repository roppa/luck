# Bitcoin Block Luck Calculation

This is a utility for Bitcoin miners/mining pools to calculate the 'luck' of mining a block.

When a block has been mined you need to save when the block was started mined (created) and the mined at (when a hash has been found) timestamps.

First we need to cover constant values:

- hash = 2 pow 32
- PHz per second = 10 pow 15
- block average = hash * PHz per second

To calculate luck you need how long it took to mine the block, your total hashrate, and network difficulty. Eg:

- difficulty = 336899932795 // network difficulty
- hashrate = total hashrate of mined block
- minedTimeSeconds = (minedat - created) in seconds

## luck({ difficulty, hashrate, minedTimeSeconds })

```javascript
console.log(luck({
  difficulty: 336899932795
  hashrate: 154.9, // block hashrate
  minedTimeSeconds: 9172 // how long block took to mine
})) // '102.71'
```
