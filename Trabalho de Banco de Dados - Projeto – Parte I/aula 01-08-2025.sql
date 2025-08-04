CREATE DATABASE empresa4;
use empresa4;

CREATE Table cliente(
    id int primary key auto_increment,
    nome VARCHAR(100),
    cpf VARCHAR(11)
);

INSERT INTO cliente (nome, cpf) 
VALUES
    ('Maria Rodrigues', 36985214785),
    ('João da Silva', 78945612321);