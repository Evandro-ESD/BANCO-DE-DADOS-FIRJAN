
CREATE DATABASE jogos;
use jogos;

CREATE TABLE Plataforma (
 id_plataforma INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(50) NOT NULL
);
CREATE TABLE Jogo (
 id_jogo INT PRIMARY KEY AUTO_INCREMENT,
 titulo VARCHAR(100) NOT NULL,
 genero VARCHAR(30),
 preco DECIMAL(6,2),
 id_plataforma INT,
 FOREIGN KEY (id_plataforma) REFERENCES Plataforma(id_plataforma)
);
CREATE TABLE Jogador (
 id_jogador INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(60),
 email VARCHAR(100)
);
CREATE TABLE Compra (
 id_compra INT PRIMARY KEY AUTO_INCREMENT,
 id_jogador INT,
 id_jogo INT,
 data_compra DATE,
 valor_pago DECIMAL(6,2),
 FOREIGN KEY (id_jogador) REFERENCES Jogador(id_jogador),
 FOREIGN KEY (id_jogo) REFERENCES Jogo(id_jogo)
);
-- inserção de valores
INSERT INTO Plataforma (nome) VALUES
('PC'), ('PlayStation 5'), ('Xbox Series X'), ('Nintendo Switch'), 
('Mobile');
INSERT INTO Jogo (titulo, genero, preco, id_plataforma) VALUES
('Elden Ring', 'RPG', 299.90, 2),
('Halo Infinite', 'FPS', 249.99, 3),
('Zelda: BOTW', 'Aventura', 299.90, 4),
('Genshin Impact', 'RPG', 0.00, 5),
('Cyberpunk 2077', 'RPG', 199.99, 1);
INSERT INTO Jogador (nome, email) VALUES
('Lucas Silva', 'lucas@email.com'),
('Mariana Rocha', 'mariana@email.com'),
('Carlos Neto', 'carlos@email.com'),
('Fernanda Costa', 'fernanda@email.com'),
('João Pereira', 'joao@email.com');
INSERT INTO Compra (id_jogador, id_jogo, data_compra, valor_pago) VALUES
(1, 1, '2024-03-01', 299.90),
(2, 2, '2024-03-05', 249.99),
(3, 4, '2024-03-10', 0.00),
(4, 3, '2024-03-15', 299.90),
(5, 5, '2024-03-20', 159.99)

