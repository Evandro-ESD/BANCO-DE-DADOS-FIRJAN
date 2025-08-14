import db from '../db.js';
import jwtService from '../service/jwtService.js';
import decryptService from '../service/decryptService.js';

const login = async (req, res) => {
  try {
    const { login, senha } = req.body;

    if (!login || !senha) {
      return res.status(400).json({ message: 'E-mail e senha são obrigatórios' });
    }

    // Buscar usuário no banco
    const [rows] = await db.execute('SELECT * FROM users WHERE login = ?', [login]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    const user = rows[0];
    console.log("teste", user)

    // Validar senha
    const senhaValida = await decryptService.validaPassword(senha, user.senha);
    if (!senhaValida) {
      return res.status(401).json({ message: 'Senha inválida' });
    }

    // Gerar token
    const token = jwtService.generateToken({
      user
    });

    return res.status(200).json({
      message: 'Login realizado com sucesso',
      token,
      user: {
        id: user.id,
        nome: user.nome,
        login: user.login
      }
    });

  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

export default { login };
