const service = require('../service/authService')

const register = (req, res) => {
    const { login, senha } = req.body

    service.register(login, senha, (erro) => {
        if(erro) return res.status(400).json({ erro })
        res.status(201).json({ message: 'Usuário criado com sucesso!' })
    })
}

const login = (req, res) => {
    const { login, senha } = req.body

    service.login(login, senha, (erro, resultado) => {
        if(erro) return res.status(400).json({ erro })
        res.status(200).json(resultado)
    })
}