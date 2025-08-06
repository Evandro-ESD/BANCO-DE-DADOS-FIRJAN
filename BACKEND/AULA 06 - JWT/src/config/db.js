const mysql = require('mysql2')
const dotenv = require('dotenv')
const path = require('path')
dotenv.config({ path:'../../.env'})

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect((erro) => {
    if(erro){
        console.log("Erro na conexão", erro)
    }
    else{
        console.log("Conexão realizada ao MySQL")
    }
})

module.exports = db;