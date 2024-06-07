const { FAILED_STATUS, ERROR_STATUS } = require('../constants')

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode
    this.status = `${statusCode}`.startsWith('4') ? FAILED_STATUS : ERROR_STATUS
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = AppError
