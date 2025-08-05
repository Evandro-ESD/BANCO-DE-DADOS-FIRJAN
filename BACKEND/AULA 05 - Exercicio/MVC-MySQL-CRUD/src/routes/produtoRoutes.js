const express = require('express')
const router = express.Router() //rotas do express
const controller = require('../controller/produtoController')

router.get('/produtos', controller.getProdutos) //listar
router.get('/produtos/:id', controller.getProdutoId )
router.post('/produtos', controller.insertProduto)
router.put('/produtos/:id', controller.updateProduto)
router.delete('/produtos/:id', controller.deleteProduto)

module.exports = router;