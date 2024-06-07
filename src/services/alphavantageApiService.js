const { ALPHA_VANTAGE_BASE_URL } = require('../constants')
const cache = require('../utils/cache');
const { alphavantageStockPayloadMapper } = require('../utils/stockUtil')
const axios = require('axios')
const client = axios.create({
  baseURL: ALPHA_VANTAGE_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

exports.queryStockBySymbol = async (symbol) => {
  try {
    const cachedData = cache.get(symbol);
    if (cachedData) return cachedData;

    const queryParams = `function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=C2T65JUZI7YVUUT0`
    const result = await client.get(`/query?${queryParams}`)
    const data = result.data['Time Series (5min)']
    const firstKey = Object.keys(data)[0]
    const firstElement = data[firstKey]

    const stockData = alphavantageStockPayloadMapper(firstElement)
    cache.set(symbol, stockData);
    return stockData
  } catch (error) {
    console.log(error)
    return null
  }
}
