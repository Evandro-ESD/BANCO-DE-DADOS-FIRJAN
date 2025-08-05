const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'loja2'
})
// exports.
conexao.connect((erro) => { 
    if(erro) console.log('Erro ao se conectar ao banco', erro.message)
    console.log('Conectado ao Banco LOJA2')
})

module.exports = conexao;
