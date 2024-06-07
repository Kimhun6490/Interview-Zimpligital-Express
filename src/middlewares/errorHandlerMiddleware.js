const { ERROR_STATUS } = require('../constants')

const errorHandlerMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || ERROR_STATUS

  return res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
}

module.exports = errorHandlerMiddleware
