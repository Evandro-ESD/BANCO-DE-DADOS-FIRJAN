import pool from '../config/db.js'

export const getAllCatalogo = async () => {
    const [rows] = await pool.execute(`select * from catalogo`)
    return rows
}

export const getGameById = async (id) => {
    const [rows] = await pool.execute(`SELECT * FROM catalogo WHERE id = ?`, [id])
    return rows
}

export const insertGame = async (nome, tipo, ano) => {
    const [result] = await pool.execute(
        `INSERT INTO catalogo (nome, tipo, ano) VALUES (?,?,?)`, [nome, tipo, ano])
    return result
}

export const updateGame = async (nome, tipo, ano, id) => {
    const [result] = await pool.execute(
        `UPDATE catalogo SET nome = ?, tipo = ?, ano = ? where id = ?`, [nome, tipo, ano, id])
    return result
}

export const deleteGame = async (id) => {
    const [result] = await pool.execute(
        'DELETE FROM catalogo WHERE id = ?', [id])
    return result
}
