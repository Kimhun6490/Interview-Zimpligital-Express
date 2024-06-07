const { SUCCESS_STATUS } = require('../constants')
const alphavantage = require('../services/alphavantageApiService')
const AppError = require('../utils/appError')
const catchAsync = require('../utils/catchAsync')

exports.queryStocks = catchAsync(async (req, res, next) => {
  const { symbol } = req.query
  if (!symbol) return next(new AppError(`symbol is required.`, 400))

  const stock = await alphavantage.queryStockBySymbol(symbol)
  if (!stock) return next(new AppError(`stock ${symbol} not found.`, 404))

  return res.status(200).json({
    status: SUCCESS_STATUS,
    data: stock,
  })
})
