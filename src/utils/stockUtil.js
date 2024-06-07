exports.alphavantageStockPayloadMapper = (payload) => {
  return {
    openPrice: parseFloat(payload['1. open']),
    highPrice: parseFloat(payload['2. high']),
    lowPrice: parseFloat(payload['3. low']),
    closePrice: parseFloat(payload['4. close']),
    tradingVolume: parseInt(payload['5. volume'], 10),
  }
}
