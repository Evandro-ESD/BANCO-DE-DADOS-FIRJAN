const express = require('express')
const cors = require('cors')
const bp = require('body-parser')

const app = express()
app.use(cors())
app.use(bp.json())

const routes = require('./routes/produtoRoutes')
app.use('/', routes)

module.exports = app