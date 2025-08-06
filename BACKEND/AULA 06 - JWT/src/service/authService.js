const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const repo = require('../repository/userRepository')

const register = (login, senha, valor) => {
    //bcrypt sendo usado na senha -> hash
    bcrypt.hash(senha, 10, (erro, hash) => {
        if(erro) 
            return valor(erro);
            repo.createUser( login, hash, valor )
    })
}

const login = (login, senha, valor) => {
    repo.findByLogin(login, (erro, resultado) => {
        if(erro || resultado.length === 0)
            return valor('Usuario não encontrado')

        const user = resultado[0]
        bcrypt.compare(senha, user.senha, (erro , match) => {
            if(erro || !match) return valor('Senha Inálida!')

        const token = jwt.sign({ id: user.id, login: user.login }, 
        process.env.JWT_SECRET, { expiresIn: '1h' })
        valor(null, { token })
        })
    })
}
module.exports = { register, login }