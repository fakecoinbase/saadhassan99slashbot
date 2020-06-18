// requires
const CoinbasePro = require('coinbase-pro')
const config = require('./configuration')

//configurations
const key = config.get('COINBASEPRO_API_KEY')
const secret = config.get('COINBASEPRO_API_SECRET')
const passphrase = config.get('COINBASEPRO_API_PASSPHRASE')
const apiUrl = config.get('COINBASEPRO_API_URL')

const publicClient = new CoinbasePro.PublicClient();
const authedClient = new CoinbasePro.AuthenticatedClient(
    key,
    secret,
    passphrase,
    apiUrl
  )

  const product = 'BTC-USD'

async function historicalRates() {
    const results = await publicClient.getProductHistoricRates(
                            product, 
                            { granularity: 300 })
    
}

historicalRates()