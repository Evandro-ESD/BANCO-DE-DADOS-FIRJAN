-- Exercício com consultas usando JOIN
-- Criar banco de dados
CREATE DATABASE curso;
USE curso;
-- Tabela Aluno
CREATE TABLE Aluno (
 id_aluno INT PRIMARY KEY AUTO_INCREMENT,
 nome VARCHAR(100)
);
-- Tabela Disciplina
CREATE TABLE Disciplina (
 id_disciplina INT PRIMARY KEY AUTO_INCREMENT,
 nome_disciplina VARCHAR(100)
);
-- Tabela Inscricao
CREATE TABLE Inscricao (
 id_inscricao INT PRIMARY KEY AUTO_INCREMENT,
 id_aluno INT,
 id_disciplina INT,
 FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
 FOREIGN KEY (id_disciplina) REFERENCES Disciplina(id_disciplina)
);
-- Alunos
INSERT INTO Aluno (nome) VALUES 
('Alice'),
('Bruno'),
('Carla');
-- Disciplinas
INSERT INTO Disciplina (nome_disciplina) VALUES 
('Banco de Dados'),
('Lógica de Programação');
-- Inscrições
INSERT INTO Inscricao (id_aluno, id_disciplina) VALUES
(1, 1), -- Alice em Banco de Dados
(2, 2); -- Bruno em Lógica de Programação
-- Carla não está inscrita em nenhuma disciplina
-- Banco de Dados tem Alice, Lógica tem Bruno

-- =========================================================================
-- CONSULTAS SIMPLES COM JOIN, LEFT JOIN, RIGHT JOIN
-- 1. JOIN — Mostrar apenas alunos inscritos com os nomes das disciplinas
select a.nome as Nome_Aluno, d.nome_disciplina
from aluno a
right join inscricao i on a.id_aluno = i.id_aluno
left join disciplina d on d.id_disciplina  = i.id_disciplina;

-- 2. LEFT JOIN — Mostrar todos os alunos, mesmo os não inscritos
select a.nome AS Nome_Aluno, d.nome_disciplina AS Nome_Disciplina
from aluno a
left join inscricao i on a.id_aluno = i.id_aluno
left join disciplina d on i.id_disciplina = d.id_disciplina;

-- 3. RIGHT JOIN — Mostrar todas as disciplinas, mesmo sem alunos
select d.nome_disciplina as NOME_DISCIPLINA , a.nome as NOME_ALUNO
from disciplina d
right join inscricao i on d.id_disciplina = i.id_disciplina
right join aluno a on a.id_aluno = i.id_aluno;

-- 4. LEFT JOIN — Listar nome de cada aluno e sua matrícula (se houver)
select a.nome as NOME, d.id_disciplina as MATRICULA
from aluno a
left join inscricao i on a.id_aluno = i.id_aluno
right join disciplina d on d.id_disciplina = i.id_disciplina;

-- 5. JOIN — Mostrar apenas as disciplinas com alunos inscritos
select d.nome_disciplina as DISCIPLINA, a.nome as NOME_ALUNO
from disciplina d
inner join inscricao i on d.id_disciplina = i.id_disciplina
inner join aluno a on i.id_aluno = a.id_aluno;

-- 6. RIGHT JOIN — Mostrar disciplinas e os nomes de alunos inscritos
select d.nome_disciplina as DISCIPLINA, a.nome as NOME_ALUNO
from disciplina d
right join inscricao i on d.id_disciplina = i.id_disciplina
left join aluno a on a.id_aluno = i.id_aluno;

-- 7. LEFT JOIN com filtro — Mostrar apenas os alunos sem inscrição
SELECT a.nome AS Nome_Aluno, d.nome_disciplina as Nome_Disciplina
FROM aluno a
LEFT JOIN inscricao i ON a.id_aluno = i.id_aluno
LEFT JOIN disciplina d ON d.id_disciplina = i.id_disciplina
WHERE i.id_aluno IS NULL;

-- 8. LEFT JOIN com contagem — Total de disciplinas por aluno
select d.nome_disciplina as NOme_Disciplina, count(i.id_disciplina) as Total_Disciplinas
from disciplina d
left join inscricao i on i.id_disciplina = d.id_disciplina
group by d.id_disciplina, d.nome_disciplina;



