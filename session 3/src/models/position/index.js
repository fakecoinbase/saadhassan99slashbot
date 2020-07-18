class Position {
    constructor({ trade, id }) {
        this.state = 'open'
        this.open = trade
        this.id = id
    }

    close({ trade }) {
        this.state = 'closed'
        this.close = trade
    }
}

module.exports = Position