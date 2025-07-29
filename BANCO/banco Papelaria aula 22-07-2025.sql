CREATE TABLE Papelaria;

use Papelaria;

CREATE TABLE Fornecedor 
( 
 idFornecedor INT PRIMARY KEY,  
 nome VARCHAR(50),  
 telefone INT  
); 

CREATE TABLE Produto 
( 
 nome VARCHAR(50),  
 idProduto INT PRIMARY KEY,  
 idFornecedor INT  
); 

CREATE TABLE Cliente 
( 
 nome VARCHAR(50),  
 idCliente INT PRIMARY KEY,  
 telefone INT
); 

CREATE TABLE Venda 
( 
 preco FLOAT,  
 idVendas INT PRIMARY KEY  
); 

CREATE TABLE itensVenda 
( 
 idItensVenda INT PRIMARY KEY,  
 idVendas INT,  
 idProduto INT
); 


ALTER TABLE Produto ADD FOREIGN KEY(idFornecedor) REFERENCES Fornecedor (idFornecedor);
ALTER TABLE itensVenda ADD FOREIGN KEY(idVendas) REFERENCES Venda (idVendas);
ALTER TABLE itensVenda ADD FOREIGN KEY(idProduto) REFERENCES Produto (idProduto);
