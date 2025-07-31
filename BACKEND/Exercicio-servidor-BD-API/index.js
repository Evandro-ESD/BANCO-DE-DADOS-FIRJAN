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
app.post('clientes/create', (req, res) => {
    const { nome, cpf } = req.body
    const sql = `INSERT INTO cliente VALUES(?, ?)`

    db.query(sql, [nome, cpf], (err, result) => {
        if (err) res.status(500).json({ Erro: 'Erro ao inserir dados' });
        res.status(201).json({ mensagem: `Cliente criado com sucesso` });
    });
})


// iniciar o servidor
app.listen(PORT, () => {
    console.log(`Serviço rodando na porta: ${PORT}`)
});