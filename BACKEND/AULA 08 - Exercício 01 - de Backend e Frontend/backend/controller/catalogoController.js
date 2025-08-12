import {
    getAllCatalogo,
    getGameById,
    insertGame,
    updateGame,
    deleteGame
} from '../repository/catalogoRepository.js'

export const getAll = async (req, res) => {
    try {
        const rows = await getAllCatalogo()
        res.json(rows)
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar dados!!' })
    }
}

export const getById = async (req, res) => {
    const { id } = req.params
    try {
        const rows = await getGameById(id)
        if (rows.length === 0) return res.status(404).json({ mensagem: 'Jogo não encontrado' })
        res.json(rows[0])
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao buscar jogo!!' })
    }
}

export const create = async (req, res) => {
    const { nome, tipo, ano } = req.body
    try {
        const result = await insertGame(nome, tipo, ano)
        res.status(201).json({ mensagem: "Jogo inserido com suceso", result })
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao inserir jogo!!' })
    }
}

export const update = async (req, res) => {
    const { id } = req.params
    const { nome, tipo, ano } = req.body
    try {
        const result = await updateGame(nome, tipo, ano, id)
        if (result.affectedRows === 0) return res.status(404).json({ mensagem: 'Jogo não encontrado.' })
        res.status(201).json({ mensagem: "Jogo atualizado com suceso", result }) // confirmar result
    } catch (error) {
        res.status(500).json({ erro: 'Erro ao atualizar jogo!!' })
    }
}

export const remove = async (req, res) => {
    const { id } = req.params
    try {
        const result = await deleteGame(id)
        /** "affectedRows" ==>> função ou propriedade que retorna o número de 
         * linhas afetadas por uma operação de escrita em 
         * um banco de dados, como INSERT, UPDATE, REPLACE ou DELETE. 
         * Em outras palavras, ela indica quantas linhas foram 
         * modificadas ou excluídas em uma consulta.  */
        if (result.affectedRows === 0) {
            return res.status(404).json({ mensagem: 'Jogo não encontrado!!' })
        }
        res.json({ mensagem: 'Jogo excluido com sucesso!!', jogo: result.indexOf })
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar jogo' });
    }
}