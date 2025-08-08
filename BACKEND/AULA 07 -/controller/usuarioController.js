const db = require('../db')

const db = pool

exports.getAll = (req, res) => {
    db.query('SELECT * FROM usuarios', (err, result) => {
        if (err) return res.status(500).json({
            erro: err
        })
        res.json(result)
    })

}
//criar registros na tabela usuarios
exports.create = (req, res) => {
    const { nome, email } = req.body
    db.query('INSERT INTO usuarios (nome, email) VALUES (?,?)', [nome, email], (erro) => {
        if (erro) return res.status(500).json({ erro: erro })
        res.status(201).json({ mensagem: 'Usuário inserido com sucesso!' })
    })
}
 //atualizar registros da tabela usuarios
exports.update = (req, res) => {
    const { id } = req.params
    const { nome, email } = req.body
    db.query('UPDATE usuarios SET nome = ?, email = ? WHERE id = ?', [nome, email, id], (erro) => {
        if (erro) return req.status(500).json({ erro: erro })
        res.status(201).json({ mensagem: 'Usuário atualizado com sucesso!' })
    })
}

 // Excluir registros da tabela usuarios
exports.delete = (req, res) => {
    const {id} = req.params;
    const sql = 'delete from usuarios where id = ?'
    db.query(sql, [id], (erro) => {
        if(erro) return res.status(500).json({erro: erro})
            res.json({ mensagem: 'Usuário excluido com sucesso!!' })
    })
}