const express = require('express')
const router = express.Router()
const db = require('../config/db') // conexão com banco

// Rotas do GET
router.get('/clientes', (req, res) => {
    const sql = 'SELECT * FROM cliente'
    db.query(sql, (err, result) => {
        if (err) return res.status(500).json({ erro: "Erro ao conectar", err })
        res.json(result)
    })
})

// Rotas do POST
router.post('/clientes', (req, res) => { })


module.exports = router