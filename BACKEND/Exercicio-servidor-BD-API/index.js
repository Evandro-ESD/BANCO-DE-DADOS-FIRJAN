const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3001
app.use(bodyParser.json())
const db = require('./databases/dbCadastro')

app.get('/clientes', (req, res) => {
    const sql = `select * from cliente`

    db.query(sql, (err, result) => {
        if (err)
            return res.status(500).json({ erro: 'Erro ao buscar dados' });
        res.json(result);
    })
})

// inserir infrormações
app.post('/clientes/create', (req, res) => {
    const { nome, cpf } = req.body
    const sql = `INSERT INTO cliente (nome, cpf) VALUES (?, ?)`

    db.query(sql, [nome, cpf], (err, result) => {
        if (err) res.status(500).json({ Erro: 'Erro ao inserir dados', err });
        res.status(201).json({
            mensagem: `Cliente criado com sucesso`,
            resultado: result
        },
        );
    });
})
// Editar valores
app.put('/clientes/update/:id', (req, res) => {
    const { id } = req.params
    const { nome, cpf } = req.body

    const sql = `update cliente set nome = ?, cpf = ? where id = ?`

    db.query(sql, [nome, cpf, id], (err, result) => {
        if (err) return res.status(500).json({ Erro: 'Erro ao editar cliente' })

        res.status(200)
            .json({ mensagem: `Cliente ${nome} - CPF ${cpf} editado com sucesso!!` })
    })
});

// Exclusão de clientes!!!
app.delete('/clientes/delete/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM cliente WHERE id = ?`

    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).json({ Erro: 'Erro ao excluir cliente' })

        if (result.affectedRows === 0)
            return res.status(404).json({ mensagem: 'Cliente não encontrado' });

        res.status(200)
            .json({ mensagem: `Cliente excluido com sucesso!!` })
    })
})

// iniciar o servidor
app.listen(PORT, () => {
    console.log(`Serviço rodando na porta: ${PORT}`)
});