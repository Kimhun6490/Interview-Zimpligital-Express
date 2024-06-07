const express = require('express')
const app = express()
const stockRouters = require('./routes/stockRoute')
const errorHandlerMiddleware = require('./middlewares/errorHandlerMiddleware')

//ROUTERS
app.use('/api/v1/stocks', stockRouters)

//MIDDLEWARES
app.use(express.json())
app.use(errorHandlerMiddleware)

module.exports = app
