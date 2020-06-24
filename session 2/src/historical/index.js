const CoinbasePro = require('coinbase-pro')

class HistoricalService {
    constructor({ start, end, interval, product }) {
        this.publicClient = new CoinbasePro.PublicClient()
        this.start = start
        this.end = end
        this.interval = interval
    }

    async getData() {
        const results = await this.publicClient.getProductHistoricRates(this.product, {
            granularity: this.interval
        })

        return results
    }
}