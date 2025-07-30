// const express = require('express');
var mysql = require('mysql2');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sistema'
});

// mensagem de conexão
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err.message);
        return;
    }
    console.log('Conexão bem-sucedida!', connection.threadId);
});

module.exports = connection