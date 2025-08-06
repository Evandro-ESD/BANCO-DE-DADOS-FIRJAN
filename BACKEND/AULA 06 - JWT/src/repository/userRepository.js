const db = require('../config/db')

//selecionar os dados da tabela - login
const findByLogin = (login, valor) => {
    const sql = 'select * from usuarios where login = ?';
    db.query(sql, [login], valor)
}

//inserir dados na tabela login - senha
const createUser = (login, hashedPassword, valor) => {
    const sql = 'insert into usuarios (login, senha) values (?, ?)'
    db.query(sql, [login, hashedPassword], valor)
}
module.exports = {findByLogin, createUser}