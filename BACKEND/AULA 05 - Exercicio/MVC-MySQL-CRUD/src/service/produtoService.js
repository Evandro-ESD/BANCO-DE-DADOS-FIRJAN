const repo = require('../repository/produtoRepository');

exports.getProdutos = (resposta) => {
    repo.buscarProdutos(resposta)
}
exports.getProdutosId = (id, resposta) => {
    repo.buscarProdutos(id, resposta)
}
exports.insert = (produto, resposta) => {
    repo.insertProduto(produto, resposta)
}
exports.update = (id, produto, resposta) => {
    repo.updateProdutos(id, produto, resposta)
}
exports.delete = (id, resposta) => {
    repo.deletarProdutos(id, resposta)
}
