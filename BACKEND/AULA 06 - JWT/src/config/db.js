const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config({ path: '../../.env' }) 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.BD_NAME
})

db.connect((erro) => {
    if (erro) {
        console.error('Erro ao conectar ao banco de dados:', erro)
    } else {
        console.log('Conexão com o banco de dados estabelecida com sucesso!')
    }
})

module.exports = db
