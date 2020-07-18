const Candlestick = require('../models/candlestick')
const Historical = require('../historical')

class Backtester {
    constructor ({ start, end, interval, product }) {
        this.start = start
        this.end = end
        this.interval
        this.product = product
        this.historical = new Historical({
            start, end, interval, product
        })
    }

    async start() {
        try{
            const history = await this.historical.getData()
        }catch (error) {
            console.log (error)
        }
    }
}

module.exports = Backtester