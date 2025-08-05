const service = require('../service/produtoService')

exports.getProdutos = (req, res) => {
    service.getProdutos((err, result) => {
        if (err) return res.status(500).json({ erro: `Erro ao buscar produtos: ${err}` })
        if (result.lenght === 0) return res.json({ mensagem: 'Nenhum produto em estoque' })
        res.json(result)
    })
}

exports.getProdutoId = (req, res) => {
    const { id } = req.params
    service.getProdutosId(id, (err, result) => {
        if (err) return res.status(500).json({ erro: `Erro ao buscar produtos: ${err}` })
        if (result.lenght === 0) return res.status(404).json({ mensagem: 'Cliente não encontrado' })
        res.json(result)
    })
}

exports.insertProduto = (req, res) => {
    service.insert(req.body, (err, result) => {
        if (err) return res.status(500).json({ erro: `Erro ao inserir produto: ${err}` })
        res.status(201).json({ mensagem: 'Produto inserido com sucesso!', id: result.insertID })
    })
}

exports.updateProduto = (req, res) => {
    const { id } = req.params
    service.update(id, req.body, (err, result) => {
        if (err) res.status(500).json({ erro: `Erro ao editar produto: ${err}` })
        res.json({ mensagem: 'Produto atualizado com sucesso!' })
    })
}

exports.deleteProduto = (req, res) => {
    const { id } = req.params
    service.delete(id, (err, result) => {
        if (err) res.status(500).json({ erro: `Erro ao buscar produtos: ${err}` })
        res.json({ mensagem: 'Produto removido com sucesso!!\n', produto: result })
    })
}
