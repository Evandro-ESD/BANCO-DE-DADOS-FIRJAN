-- Criar banco de dados
CREATE DATABASE colegio;
USE colegio;

-- Tabela Aluno
CREATE TABLE Aluno (
    id_aluno INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idade INT
);

-- Tabela Curso
CREATE TABLE Curso (
    id_curso INT PRIMARY KEY AUTO_INCREMENT,
    nome_curso VARCHAR(100)
);

-- Tabela Matricula (relacionamento entre Aluno e Curso)
CREATE TABLE Matricula (
    id_matricula INT PRIMARY KEY AUTO_INCREMENT,
    id_aluno INT,
    id_curso INT,
    ano_letivo INT,
    FOREIGN KEY (id_aluno) REFERENCES Aluno(id_aluno),
    FOREIGN KEY (id_curso) REFERENCES Curso(id_curso)
);
-- inserir dados
-- Inserir Alunos
INSERT INTO Aluno (nome, idade) VALUES 
('João Silva', 15),
('Maria Oliveira', 16),
('Carlos Souza', 17);  -- Este aluno não será matriculado (para testar LEFT JOIN)

-- Inserir Cursos
INSERT INTO Curso (nome_curso) VALUES 
('Matemática'),
('História'),
('Biologia');  -- Este curso ficará sem alunos (para testar RIGHT JOIN)

-- Inserir Matrículas
INSERT INTO Matricula (id_aluno, id_curso, ano_letivo) VALUES
(1, 1, 2024),  -- João em Matemática
(1, 2, 2024),  -- João em História
(2, 1, 2024);  -- Maria em Matemática

-- ---------------------------------------------------------------------------------------------------------------------------
-- Alunos e seus cursos
select a.nome as NOME, c.nome_curso as CURSO
from
Aluno a
join Matricula m on a.id_aluno = m.id_aluno
join Curso c on c.id_curso = m.id_curso;

-- liste todos os alunos com ou sem matricula
select a.nome as NOME, c.nome_curso as CURSO
from Aluno a 
left join matricula m on a.id_aluno = m.id_aluno
left join curso c on a.id_aluno = m.id_aluno;

-- lista todos os cursos com ou sem aluno matriculados
select c.nome_curso as CURSO, a.nome as NOME
from Aluno a 
right join matricula m on a.id_aluno = m.id_aluno
right join curso c on a.id_aluno = m.id_aluno;

select c.nome_curso as CURSO, a.nome as NOME_ALUNO
FROM
curso c 
LEFT join matricula m on c.id_curso = m.id_curso
LEFT join Aluno a on a.id_aluno = m.id_aluno;

-- left join com count - quantidade de coursos por aluno
-- (mesmo sem matricula)
select a.nome as Nome, count(m.id_aluno) as Total_Cursos_Matriculados
from aluno a
left join matricula m on a.id_aluno = m.id_aluno
group by a.id_aluno;


-- liste nome do curso e nome dos alunos e ordençção por nome do curso.
select  c.nome_curso as CURSOS, a.nome as ALUNOS
from curso c
left join Matricula m on c.id_curso = m.id_curso
left join aluno a on a.id_aluno = m.id_aluno
order by c.nome_curso;

-- exempplo de view
CREATE VIEW CURSO_ALUNO AS 
select  c.nome_curso as CURSOS, a.nome as ALUNOS
from curso c
left join Matricula m on c.id_curso = m.id_curso
left join aluno a on a.id_aluno = m.id_aluno
order by c.nome_curso;

select * FROM curso_aluno;

CREATE TABLE exemplo AS SELECT * FROM curso_aluno;









