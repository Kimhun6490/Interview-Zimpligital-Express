const express = require('express')
const router = express.Router()

const { queryStocks } = require('../controllers/stockController')

router.route('/').get(queryStocks)

module.exports = router
