const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

// Permitir acesso do Angular
app.use(cors());

// Conexão com o MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar no MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL!');
});

// Rota exemplo para listar dados
app.get('/clientes', (req, res) => {
    connection.query('SELECT * FROM clientes', (err, results) => {
        if (err) {
            console.error('Erro ao buscar clientes:', err);
            res.status(500).send('Erro no servidor');
            return;
        }
        res.json(results);
    });
});

app.get('/cards', (req, res) => {
    connection.query('SELECT * FROM cards', (err, results) => {
        if (err) {
            console.error('Erro ao buscar cards: ', err)
            res.status(500).send('Erro no servidor')
            return
        }
        res.json(results)
    })
})

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
