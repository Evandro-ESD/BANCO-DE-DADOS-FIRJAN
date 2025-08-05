const db = require('../config/db')

exports.buscarProdutos = (resposta) => {
    db.query('SELECT * FROM produtos', resposta)
}

exports.buscarProdutosId = (id, resposta) => {
    db.query('SELECT * FROM produtos where id = ?,', [id], resposta)
}

exports.insertProduto = (produto, resposta) => {
    const { nome, preco, estoque } = produto
    db.query('INSERT INTO produtos (nome, preco, estoque) VALUES (?,?,?)', 
                                   [nome, preco, estoque], resposta)
}

exports.updateProdutos = (id, produto, resposta) => {
    const { nome, preco, estoque } = produto
    db.query('UPDATE produtos SET nome = ?, preco = ?, estoque = ? WHERE id = ?', 
                                [nome, preco, estoque, id], resposta)
}

exports.deletarProdutos = (id, resposta) => {
    db.query('DELETE FROM produtos WHERE id = ?', [id], resposta)
}