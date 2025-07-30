const express = require('express')

//body-parse - para lidar com json no corpo das requisições
const bodyParse = require('body-parser')
const db = require('./bd')

const app = express()
const PORT = 3005

app.use(bodyParse.json())

// visualizar dados 
app.get('/pessoas', (req, res) => {
    const sql = 'select * from pessoa'
    db.query(sql, (erro, resultado) => {
        if (erro) {
            return res.status(500).json({ erro: 'Erro ao buscar dados' });
        }
        res.json(resultado);
    })
})

app.post('/pessoas', (req, res) => {
    const { nome, sexo } = req.body
    const sql = "insert into pessoa(nome, sexo) value (?, ?)"

    db.query(sql, [nome, sexo], (erro, resultado) => {
        if (erro)
            return res.status(500).json({ erro: 'Erro ao inserir dados' });
        res.status(201).json({ mensagem: `Pessoa inserida com sucesso`, id: resultado.insertId })
    })
})


// iniciar o servidor
app.listen(PORT, () => {
    console.log(`Serviço rodando na porta: ${PORT}`)
});
