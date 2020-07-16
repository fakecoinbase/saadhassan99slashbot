const CoinbasePro = require('coinbase-pro')

class HistoricalService {
    constructor({ start, end, interval = 300, product }) {
        this.publicClient = new CoinbasePro.PublicClient()
        this.start = start
        this.end = end
        this.interval = interval
        this.product = product
    }

    async getData() {
        const results = await this.publicClient.getProductHistoricRates(this.product, {
            start: this.start,
            end: this.end,
            granularity: 300
        })

        return results
    }
}

module.exports = HistoricalService