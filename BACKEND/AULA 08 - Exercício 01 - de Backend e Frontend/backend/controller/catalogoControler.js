import pool from '../config/db.js'

export const getAll = async (req, res) => {
    try {
        const [rows] = await pool.execute(`select * from catalogo`)
        res.json(rows)
        console.log(rows)
    } catch (error) {
        res.json({ erro: 'Erro ao buscar dados!!' })

    }
}
export const getPlayForId = async (req, res) => {
    const { id } = req.params
    try {
        const [rows] = await pool.execute(`select * from catalogo where id = ?`, [id])
        if (rows.length === 0) return res.status(404).json({ mensagem: 'Jogo não encontrado' })
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar jogo!!' })
    }
}
export const addPlay = async (req, res) => {
    const { nome, tipo, ano } = req.body
    try {
        const [rows] = await pool.execute(
            `insert into catalogo (nome, tipo, ano) VALUES (?,?,?)`, [nome, tipo, ano])
        res.status(201).json({ mensagem: "Jogo inserido com suceso" })
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao inserir jogo!!' })
    }
}
export const updatePlay = async (req, res) => {
    const { id } = req.params
    const { nome, tipo, ano } = req.body
    try {
        const [rows] = await pool.execute(
            `update catalogo set nome = ?, tipo = ?, ano = ? where id = ?`, [nome, tipo, ano, id])
        res.status(201).json({ mensagem: "Jogo atualizado com suceso" })
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar jogo!!' })
    }
}


