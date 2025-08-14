import mysql from 'mysql2/promise'
import dotenv from 'dotenv'

dotenv.config()

// Criar um pool de conexões
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DV_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true, // Fica na fila se todas as conexões estiverem ocupadas
    connectionLimit: 10,      // Máximo de conexões simultâneas
    queueLimit: 0             // 0 = sem limite de fila
});

// // Testar o pool
// pool.getConnection((err, connection) => {
//     if (err) {
//         console.error('Erro ao conectar ao MySQL:', err);
//         return;
//     }
//     console.log('Conexão ao MySQL bem-sucedida!');
//     connection.release(); // devolve ao pool
// });

const [rows] = await pool.execute('SELECT * FROM users');
console.log(rows);

export default pool;
