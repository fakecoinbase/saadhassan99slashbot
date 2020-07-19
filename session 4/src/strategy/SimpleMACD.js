const Strategy = require('./strategy')
const tulind = require('tulind')

class SimpleMACD extends Strategy {
    async run({ sticks, time }) {
        console.log(tulind.indicators.close)
        const prices = sticks.map(stick => stick.average())

        const results  = await tulind.indicators.macd(prices, [12, 26, 9])
    }
}