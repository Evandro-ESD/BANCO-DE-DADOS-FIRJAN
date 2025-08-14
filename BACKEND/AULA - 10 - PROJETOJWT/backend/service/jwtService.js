import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

// gerar um token do usuário com tempo de expiração
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, login: user.login, senha: user.senha, role: user.role },
        process.env.JW_SECRET,
        { expiresIn: process.env.JW_EXPIRE_IN }
    )
}

// veirifar sse o token jwt é válido
const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JW_SECRET)

    } catch (error) {

        return null; // retorna nulo o token inválido

    } finally { }
}

export default { generateToken, verifyToken }

