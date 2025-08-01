const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'empresa4'
})

conexao.connect((err) => {
    if (err) console.log("Erro ao conectar: ", err.message)
    else console.log("Conectado com sucesso!")
});
module.exports = conexao;
