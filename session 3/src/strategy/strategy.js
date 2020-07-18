const Trade = require('../models/trade')
const Position = require('../models/position')

class Strategy {

    constructor({ onBuySignal, onSellSignal }) {
        this.onBuySignal = onBuySignal
        this.onSellSignal = onSellSignal
        this.positions = {}
    }

    async positionOpened({ price, time, amount, id }) {
        const trade = new Trade({ price, time, amount })
        const position = new Position({ trade, id })
        this.positions[id] = position
    }

    async positionClosed({ price, time, amount, id }) {
        const trade = new Trade({ price, time, amount })
        const position = this.positions[id]

        if (position) {
            position.close({ trade })
        }

    }
}

module.exports = Strategy