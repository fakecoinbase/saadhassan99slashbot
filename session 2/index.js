const program = require('commander')
const CoinbasePro = require('coinbase-pro')
const config = require('./configuration')

const now = new Date().getTime() * 1e-3
const yesterday = now - (24 * 60 * 60)

program.version('1.0.0')
  .option('-i, --interval [interval]', 'Interval in seconds for candlestick', 300)
  .option('-p, --product [product]', 'product identifier', 'BTC-USD') 
  .option('-s, --start [start]', 'Start time in unix seconds', parseInt, yesterday)
  .option('-e, --end [end]', 'End time in unix seconds', parseInt, now)
  .parse(process.argv)


const main = async function() {
  const { interval, product, start, end } = program
  console.log(interval)
  console.log(product)
  console.log(new Date(start * 1e3))
  console.log(new Date(end * 1e3))
}

main()