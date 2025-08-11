import mysql from 'mysql2/promise';
// import dotenv from 'dotenv';
// dotenv.config({path: '../backend/.env'});


const pool = mysql.createPool({
    // host: process.env.DB_HOST,
    // user: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'GameShelf',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function queryDatabase() {
    const [rows] = await pool.execute('SELECT * FROM catalogo');
    console.log(rows);
}

queryDatabase();

export default pool