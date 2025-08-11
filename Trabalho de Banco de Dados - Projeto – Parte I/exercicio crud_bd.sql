CREATE DATABASE crud_db;
use crud_db;

CREATE TABLE usuarios(
    id INT auto_increment PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

INSERT INTO usuarios (nome, email) values ( 'João', 'joao@email.com.br');