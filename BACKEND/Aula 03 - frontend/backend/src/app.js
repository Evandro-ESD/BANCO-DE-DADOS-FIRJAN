const express = require('express')
const  cors = require('cors')
const app = express()
const clienteRoutes = require('./routes/ClienteRoutes')

app.use(cors()) // Serve para permitr que aplicações em outros dominios 
                // de portas diferentes se comuniquem
app.use(express.json())


app.use('/', clienteRoutes)

module.exports = app