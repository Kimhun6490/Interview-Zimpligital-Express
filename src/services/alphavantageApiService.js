const { ALPHA_VANTAGE_BASE_URL } = require('../constants')
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
    const queryParams = `function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=JR4RGUPGQZYDNL8A`
    const result = await client.get(`/query?${queryParams}`)
    const data = result.data['Time Series (5min)']
    const firstKey = Object.keys(data)[0]
    const firstElement = data[firstKey]
    return alphavantageStockPayloadMapper(firstElement)
  } catch (error) {
    console.log(error)
    return null
  }
}
