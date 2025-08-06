CREATE DATABASE loja2;
USE loja2;

CREATE TABLE produtos (
 id INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100),
 preco DECIMAL(10,2),
 estoque INT
);

-- Tabela de usuários
CREATE TABLE usuarios (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(255) NOT NULL
);

-- Tabela de permissões (ações que o sistema reconhece)
CREATE TABLE permissoes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50) UNIQUE NOT NULL  -- Ex: 'editar_produto', 'ver_estoque'
);

-- Tabela de ligação entre usuários e permissões (N para N)
CREATE TABLE usuario_permissoes (
  id_usuario INT,
  id_permissao INT,
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (id_permissao) REFERENCES permissoes(id) ON DELETE CASCADE,
  PRIMARY KEY (id_usuario, id_permissao)
);