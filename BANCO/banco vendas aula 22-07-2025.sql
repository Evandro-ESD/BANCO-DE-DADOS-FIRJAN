create database vendas;

use vendas;

create table Cliente (
	idCliente int primary key auto_increment,
	nome varchar(50),
    cpf varchar(11));
create table Produto (
	idProduto int primary key auto_increment,
	nome varchar(50));
    
create table itensPedido (
	idItensPedido int primary key auto_increment,
	quantidade int,
    idProduto_FK int,
    FOREIGN KEY(idProduto_FK) REFERENCES Produto (idProduto));
    
create table Pedido (
	idPedido int primary key auto_increment,
	data date,
	idCliente_FK int,
	idItensPedido_FK int,
	FOREIGN KEY(idCliente_FK) REFERENCES Cliente (idCliente),
	FOREIGN KEY(idItensPedido_FK) REFERENCES itensPedido(idItensPedido));
                    
-- inserir itens nas tabelas
                    
INSERT INTO Cliente(nome, cpf) value 
	("Hery Orborn", "2012514527"),
	("Maria Norma", "2012514527"),
	("Tia May", "2012514527"),
	("Pyter Parker", "2012514527");

-- consulta dos valores
SELECT * FROM vendas.cliente;

INSERT INTO Produto(idProduto, nome) value 
(null, 'Caneta'),
(null, 'Borracha'),
(null, 'Apontador'),
(null, 'Caderno');

-- consulta dos valores
SELECT * FROM Produto;

INSERT INTO ItensPedido(quantidade, idProduto)
value
(20, 2),
(50, 1),
(80, 3),
(200, 3);

SELECT * FROM vendas.itensPedido;

INSERT INTO `vendas`.`pedido` (`data`, `idCliente_FK`, `idItensPedido_FK`) 
VALUE 
('2025-02-23', 2, 3),
('2021-05-05', 2, 3);

SELECT * FROM pedido;