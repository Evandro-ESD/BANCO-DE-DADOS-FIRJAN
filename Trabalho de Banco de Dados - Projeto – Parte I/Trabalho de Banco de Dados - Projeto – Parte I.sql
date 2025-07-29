CREATE DATABASE trabalho_banco_dados;
use trabalho_banco_dados;

CREATE TABLE Fornecedor
( 
 idFornecedor INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 nome VARCHAR(50),  
 telefone VARCHAR(15),  
 email VARCHAR(30)  
); 

CREATE TABLE Produto 
( 
 idProduto  VARCHAR(4) PRIMARY KEY NOT NULL,  
 nome VARCHAR(50),  
 preco FLOAT,  
 estoque INT,  
 idFornecedor INT  
); 

CREATE TABLE Cliente 
(  
idCliente INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
nome VARCHAR(50),  
telefone VARCHAR(15),  
email VARCHAR(30)  
); 

CREATE TABLE Venda 
( 
 idVendas INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 valor_total DECIMAL(10,2),  
 id_cliente INT  
); 

CREATE TABLE itens_venda 
( 
id_itensVenda INT PRIMARY KEY NOT NULL AUTO_INCREMENT,  
 quantidade DECIMAL(65),  
 valor_unitario DECIMAL(10,2),  
 idProduto VARCHAR(4),  
 idVendas INT  
); 

ALTER TABLE Produto ADD FOREIGN KEY(idFornecedor) REFERENCES Fornecedor (idFornecedor);
ALTER TABLE Venda ADD FOREIGN KEY(id_cliente) REFERENCES Cliente (idCliente);
ALTER TABLE itens_venda ADD FOREIGN KEY(idProduto) REFERENCES Produto (idProduto);
ALTER TABLE itens_venda ADD FOREIGN KEY(idVendas) REFERENCES Venda (idVendas);

INSERT INTO cliente (nome, email, telefone) VALUES
('Frodo Bolseiro', 'frodo@condado.com', '21987654321'),
('Samwise Gamgi', 'sam@horta.org', '21912345678'),
('Aragorn Elessar', 'aragorn@gondor.gov', '21998765432'),
('Legolas Thranduil', 'legolas@floresta.net', '21934567890'),
('Gimli Gloin', 'gimli@montanha.org', '21976543210'),
('Gandalf Cinzento', 'gandalf@istari.mith', '21965432109'),
('Boromir Gondor', 'boromir@gondor.gov', '21923456789'),
('Pippin Tuk', 'pippin@condado.com', '21987123456'),
('Merry Brandebuque', 'merry@condado.com', '21932109876'),
('Galadriel Lorien', 'galadriel@lorien.net', '21976781234');


INSERT INTO fornecedor (nome, email, telefone) values 
('Ferraria Anã de Erebor', 'contato@ereborforge.com', '21987651234'),
( 'Elfos da Floresta Encantada', 'suporte@florestaelfica.net', '21981234567'),
('Armazém do Condado', 'vendas@condadofarms.org', '21999887766'),
('Gondor Importações Reais', 'gondor@gov-imports.com', '21992345678'),
('Rohan Cavalaria & Transportes', 'contato@rohantrans.com.br', '21995678901'),
('Minas Tirith Tecidos Nobres', 'tecidos@minastirith.co', '21990011223'),
('Lothlórien Essências Élficas', 'elficas@lorienaromas.net', '21994455667'),
('Montanhas Sombrias Metais Ltda', 'minerios@sombriasltda.com', '21993322110'),
('Baruk Bebidas Anãs', 'sac@barukcervejaria.com', '21991112233'),
('Sociedade dos Magos Consultoria','gandalf@socmagos.org', '21997766554');

INSERT INTO produto (idProduto, nome, preco) VALUES
('ANR1', 'Anel do Poder', 999.99),
('ESP2', 'Espada Andúril', 799.50),
('CLO3', 'Capa Élfica de Lórien', 199.90),
('FLE4', 'Flechas Élficas', 49.90),
('LAM5', 'Lâmpada de Galadriel', 89.90),
('ESC6', 'Escudo de Gondor', 299.99),
('POÇ7', 'Poção de Energia Élfica', 19.99),
('MEL8', 'Mel de Beorn', 14.50),
('CAZ9', 'Cajado de Gandalf', 499.00),
('MIT0', 'Armadura de Mithril', 1299.90);

UPDATE produto SET estoque = 4, idFornecedor = 6 WHERE (idProduto = 'ESP2');
UPDATE produto SET estoque = 0, idFornecedor = 5 WHERE (idProduto = 'MIT0');
UPDATE produto SET estoque = 40, idFornecedor = 4 WHERE (idProduto = 'CAZ9');
UPDATE produto SET estoque = 45, idFornecedor = 4 WHERE (idProduto = 'FLE4');
UPDATE produto SET estoque = 90, idFornecedor = 6 WHERE (idProduto = 'ANR1');
UPDATE produto SET estoque = 45, idFornecedor = 7 WHERE (idProduto = 'ESC6');
UPDATE produto SET estoque = 99, idFornecedor = 8 WHERE (idProduto = 'LAM5');
UPDATE produto SET estoque = 100, idFornecedor = 9 WHERE (idProduto = 'ESC6');
UPDATE produto SET estoque = 80, idFornecedor = 5 WHERE (idProduto = 'ANR1');

select * from produto;

INSERT INTO itens_venda (idItem, nome, preco) VALUES
('IV01', 'Anel do Poder Dourado',      999.99),
('IV02', 'Espada Andúril Deluxe',      849.90),
('IV03', 'Capa Élfica Camuflada',      219.90),
('IV04', 'Kit de Flechas Élficas',      59.90),
('IV05', 'Lâmpada de Galadriel Média',  89.90),
('IV06', 'Escudo Real de Gondor',      349.90),
('IV07', 'Poção Élfica Reforçada',      24.99),
('IV08', 'Mel Mágico de Beorn',         17.50),
('IV09', 'Cajado de Gandalf Replica',  529.00),
('IV10', 'Armadura de Mithril Leve',  1399.90);

select * from itens_venda;

INSERT INTO itens_venda (quantidade, valor_unitario, idProduto)
VALUES 
(2, 20, 'FLE4'),(6, 20, 'MEL8'),(8, 20, 'ESP2'),
(3, 20, 'CLO3'),(3, 20, 'POÇ7'),(2, 20, 'MEL8'),
(3, 20, 'LAM5'),(3, 20, 'CLO3'),(3, 20, 'MEL8'),
(4, 20, 'POÇ7'),(2, 20, 'LAM5'),(9, 20, 'LAM5'),
(3, 20, 'LAM5'),(6, 20, 'LAM5'),(1, 20, 'LAM5'),
(4, 20, 'CAZ9'),(7, 20, 'CAZ9'),(7, 20, 'CAZ9'),
(7, 20, 'CAZ9'),(4, 20, 'MEL8'),(2, 20, 'CAZ9'),
(8, 20, 'MEL8'),(5, 20, 'MEL8'),(4, 20, 'MEL8'),
(2, 20, 'MEL8'),(6, 20, 'FLE4'),(2, 20, 'CLO3');


INSERT INTO itens_venda (idVendas) 
VALUES (3),(2),(6),(1),(2),(5),(8),(8),(9),(10);

select * from itens_venda;
select * from venda;



-- ================================= RESOLUÇÃO ========================================
-- ========================  Tabela de Avaliação por Critério =========================
-- Critério Descrição Pontos
-- 1. 2 consultas com SELECT e WHERE 2,0 pts
select *from cliente;
select * from cliente where telefone like '%345%';

-- 2. 2 consultas com GROUP BY e ORDER BY com funções de agregação 2,0 pts
SELECT 
c.nome AS Nome_Cliente,
 COUNT(v.idVendas) AS Total_Vendas,
SUM(v.valor_total) AS Total_Gasto
FROM cliente c
JOIN venda v ON c.idCliente = v.id_cliente
GROUP BY c.nome
ORDER BY Total_Gasto asc;
  
SELECT c.nome AS Nome_Cliente,
COUNT(v.idVendas) AS Total_Vendas,
SUM(v.valor_total) AS Total_Gasto
FROM cliente c
JOIN venda v ON c.idCliente = v.id_cliente
GROUP BY c.nome
ORDER BY Nome_Cliente asc;

-- 3. 2 consultas com operadores aritméticos (+, -, *, /) 3,0 pts
select 
sum(quantidade)*(90/100) as Porcetagem_,
(quantidade/10) as COmpras_por_cliente
from itens_venda group by quantidade;

select sum(quantidade)*(10/100) as Porcetagem_impostos
from itens_venda;

-- 4. 3 consultas com operadores de comparação (=, !=, <, >, etc.) 2,0 pts
select * from cliente where nome = 'Frodo Bolseiro';
select * from cliente where nome != 'Frodo Bolseiro' or nome like 'G&';

-- 5. 3 consultas com operadores lógicos (AND, OR) 3,0 pts
select nome from produto where preco > 500 and preco < 1000;
select * from produto where  estoque < 0 or estoque is null;

-- 6. 2 consultas com operadores lógicos e negação (NOT) 3,0 pts
select * from produto where estoque < 0 or estoque is not null;
select * from produto where idFornecedor is not null;

-- 7. 3 consultas com operadores auxiliares (IS NULL, BETWEEN, LIKE, IN) 3,0 pts
SELECT nome, preco
FROM Produto
WHERE preco BETWEEN 50 AND 100;

SELECT nome
FROM Cliente
WHERE nome LIKE 'A%' 
AND telefone LIKE '21%';

-- 8. 3 consultas com funções de agregação (SUM(), AVG(), etc.) 2,0 pts
SELECT SUM(estoque) AS total_estoque
FROM Produto;
SELECT AVG(preco) AS preco_medio
FROM Produto;

-- 9. 2 consultas com funções de datas (NOW(), DATE(), YEAR(), etc.) 3,0 pts
ALTER TABLE venda ADD COLUMN data_venda DATE;
UPDATE venda SET data_venda = '2025-07-28' WHERE (idVendas = 2);
UPDATE venda SET data_venda = '2025-07-29' WHERE (idVendas = 3);
UPDATE venda SET data_venda = '2025-07-25' WHERE (idVendas = 4);
UPDATE venda SET data_venda = '2025-07-24' WHERE (idVendas = 5);
UPDATE venda SET data_venda = '2025-07-25' WHERE (idVendas = 6);
UPDATE venda SET data_venda = '2025-07-26' WHERE (idVendas = 7);
UPDATE venda SET data_venda = '2025-07-27' WHERE (idVendas = 8);
UPDATE venda SET data_venda = '2025-07-25' WHERE (idVendas = 9);
UPDATE venda SET data_venda = '2025-07-24' WHERE (idVendas = 10);
UPDATE venda SET data_venda = '2025-07-28' WHERE (idVendas = 1);

SELECT * FROM Venda as VENDAS_DE_HOJE
WHERE DATE(data_venda) = DATE(NOW());

SELECT YEAR(data_venda) AS ano, COUNT(*) AS TOTAL_DE_VENDAS_2025
FROM venda
GROUP BY YEAR(data_venda);

SELECT MONTH(data_venda) AS MÊS, COUNT(*) AS TOTAL_DE_VENDAS_JULHO
FROM venda
GROUP BY MONTH(data_venda);

-- 10. 3 sub-consultas com agrupamento e união de dados 5,0 pts
SELECT f.nome, preco_medio
FROM Fornecedor f
JOIN (
  SELECT idFornecedor, AVG(preco) AS preco_medio
  FROM Produto
  GROUP BY idFornecedor
) AS medias
ON f.idFornecedor = medias.idFornecedor
WHERE preco_medio > 100;

SELECT nome, 'Cliente' AS tipo
FROM Cliente UNION SELECT nome, 'Fornecedor' AS tipo
FROM Fornecedor;

SELECT nome FROM Cliente
WHERE idCliente IN ( SELECT idCliente FROM Pedido GROUP BY idCliente
  UNION SELECT idCliente FROM Pedido GROUP BY idCliente);

-- 11. 3 consultas com JOIN e visualização de tabelas 6,0 pts
SELECT c.nome AS cliente, SUM(iv.quantidade * iv.valor_unitario) AS total_gasto
FROM itens_venda iv JOIN venda v ON iv.idVendas = v.idVendas
JOIN cliente c ON v.id_cliente = c.idCliente
WHERE c.nome = 'Frodo'
GROUP BY c.nome;


-- 12. 4 consultas com tipos de JOIN: INNER, LEFT, RIGHT 6,0 pts
SELECT v.idVendas, c.nome AS cliente, p.nome AS produto, iv.quantidade, iv.valor_unitario, 
(iv.quantidade * iv.valor_unitario) AS subtotal
FROM itens_venda iv
JOIN venda v ON iv.idVendas = v.idVendas
JOIN cliente c ON v.id_cliente = c.idCliente
JOIN produto p ON iv.idProduto = p.idProduto
ORDER BY v.idVendas;

-- Total 40 pts

