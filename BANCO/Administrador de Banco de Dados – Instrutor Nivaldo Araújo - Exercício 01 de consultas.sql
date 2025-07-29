-- Administrador de Banco de Dados – Instrutor: Nivaldo Araújo - Exercício 01 de consultas
-- Exercícios de consultas

-- Cria o banco de dados abaixo no workbench.
CREATE DATABASE empresa2;
USE empresa2;
-- Tabela Fornecedor
CREATE TABLE Fornecedor (
 id_fornecedor INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,
 telefone VARCHAR(15),
 email VARCHAR(100),
 cidade VARCHAR(50)
);
-- Tabela Cliente
CREATE TABLE Cliente (
 id_cliente INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,
 telefone VARCHAR(15),
 email VARCHAR(100),
 data_nascimento DATE
);
-- Tabela Produto
CREATE TABLE Produto (
 id_produto INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100) NOT NULL,
 preco DECIMAL(10,2) NOT NULL,
 estoque INT NOT NULL,
 id_fornecedor INT,
 FOREIGN KEY (id_fornecedor) REFERENCES Fornecedor(id_fornecedor)
);

-- Tabela Pedido
CREATE TABLE Pedido (
 id_pedido INT PRIMARY KEY AUTO_INCREMENT,
 id_cliente INT,
 id_produto INT,
 data_pedido DATE NOT NULL,
 quantidade INT NOT NULL,
 FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente),
 FOREIGN KEY (id_produto) REFERENCES Produto(id_produto)
);
-- Inserindo registros Tabela Fornecedor
INSERT INTO Fornecedor (nome, telefone, email, cidade) VALUES
('Fornecedor A', '1111-1111', 'contatoA@fornec.com', 'São Paulo'),
('Fornecedor B', '2222-2222', 'contatoB@fornec.com', 'Rio de Janeiro'),
('Fornecedor C', '3333-3333', 'contatoC@fornec.com', 'Belo Horizonte'),
('Fornecedor D', '4444-4444', 'contatoD@fornec.com', 'Curitiba'),
('Fornecedor E', '5555-5555', 'contatoE@fornec.com', 'Fortaleza'),
('Fornecedor F', '6666-6666', 'contatoF@fornec.com', 'Recife');
-- Inserindo registros Tabela Cliente
INSERT INTO Cliente (nome, telefone, email, data_nascimento) VALUES
('Alice Silva', '1234-5678', 'alice@cliente.com', '1985-02-10'),
('Bruno Costa', '2345-6789', 'bruno@cliente.com', '1990-05-20'),
('Carla Dias', '3456-7890', 'carla@cliente.com', '1978-08-15'),
('Daniela Lima', '4567-8901', 'daniela@cliente.com', '1992-11-05'),
('Eduardo Rocha', '5678-9012', 'eduardo@cliente.com', '1980-12-25'),
('Fernanda Souza', '6789-0123', 'fernanda@cliente.com', '1988-07-30');
-- Inserindo registros Tabela Produto
INSERT INTO Produto (nome, preco, estoque, id_fornecedor) VALUES
('Notebook', 3000.00, 20, 1),
('Impressora', 800.00, 15, 2),
('Mouse', 50.00, 100, 3),
('Teclado', 70.00, 80, 4),
('Monitor', 1200.00, 25, 5),
('Headset', 150.00, 50, 6);
-- Inserindo registros Tabela Pedido
INSERT INTO Pedido (id_cliente, id_produto, data_pedido, quantidade) VALUES
(1, 1, '2023-05-10', 2),
(2, 3, '2023-05-11', 5),
(3, 2, '2023-05-12', 1),
(4, 4, '2023-05-13', 3),
(5, 5, '2023-05-14', 2),
(6, 6, '2023-05-15', 4);