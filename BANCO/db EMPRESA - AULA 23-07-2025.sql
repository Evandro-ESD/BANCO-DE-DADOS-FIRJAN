create  database empresa;
use empresa;

create table departamentos(
	id_departamento int primary key auto_increment,
    nome varchar(100) not null
);
create table funcionarios(
	id_funcionario int primary key auto_increment,
    nome varchar(100) not null,
    cargo varchar(50),
    salario decimal(10,2),
    id_departamento int,
    foreign key(id_departamento) references departamentos(id_departamento)
    );
    create table projetos(
		id_projeto int primary key auto_increment,
        nome varchar(100),
        orcamento decimal(12,2),
        id_departamento int,
        foreign key(id_departamento) references departamentos(id_departamento)
    );
    create table alocacoes(
		id_alocacao int primary key auto_increment,
        id_funcionario int,
        id_projeto int,
        horas_trabalhadas int,
        foreign key(id_funcionario) references funcionarios(id_funcionario),
        foreign key(id_projeto) references projetos(id_projeto)
        );

-- ------------inserir-------------------------
       
-- Departamentos
INSERT INTO departamentos (nome) VALUES 
('TI'),
('RH'),
('Financeiro'),
('Marketing');

-- Funcionários
INSERT INTO funcionarios (nome, cargo, salario, id_departamento) VALUES 
('Ana Paula', 'Analista de Sistemas', 4500.00, 3),
('Carlos Alberto', 'Recrutador', 3200.00, 2),
('Julia Rocha', 'Contadora', 5000.00, 3),
('Marcos Vinícius', 'Designer', 3900.00, 4);

-- Projetos
INSERT INTO projetos (nome, orcamento, id_departamento) VALUES 
('Sistema ERP', 100000.00, 1),
('Campanha Interna', 15000.00, 2),
('Auditoria Fiscal', 40000.00, 3),
('Redesign Website', 25000.00, 4);

-- Alocações
INSERT INTO alocacoes (id_funcionario, id_projeto, horas_trabalhadas) VALUES 
(1, 1, 120),
(2, 2, 40),
(3, 3, 60),
(4, 4, 80);

SELECT * FROM `empresa`.`funcionarios` order by nome;

-- GROUP BY ORDEDR BYT
-- TOTAL DE HORAS POR PROJETOS
SELECT id_Projeto, sum(horas_trabalhadas) from alocacoes group by 
id_projeto;

-- MEDIA SALARIAL POR DEPARTAMENTO
select id_departementos, avg(salario) 
						 as Média_Salário 
						 from funcionarios
                         group by id_departamento;
-- PROJETOS COM ORÇAMENTO MAIOR QUE 2000, ORDENADO POR 
-- ORÇAMENTO DECRESCENTE

select * from projetos where orcamento > 20 order by orcamento desc;


SELECT AVG(SALARIO) FROM FUNCIONARIOS;
SELECT count(SALARIO) FROM FUNCIONARIOS;
SELECT MAX(SALARIO) FROM FUNCIONARIOS;

CREATE TABLE vendas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    produto VARCHAR(50),
    categoria VARCHAR(50),
    quantidade INT,
    valor_unitario DECIMAL(10,2)
);
INSERT INTO vendas (produto, categoria, quantidade, valor_unitario) VALUES
('Arroz', 'Alimentos', 10, 4.50),
('Feijão', 'Alimentos', 5, 5.00),
('Arroz', 'Alimentos', 7, 4.50),
('Macarrão', 'Alimentos', 3, 3.20),
('Detergente', 'Limpeza', 4, 2.10),
('Sabão', 'Limpeza', 2, 3.50),
('Feijão', 'Alimentos', 2, 5.00);

-- Agrupar os dados por categoria, mostrando:
select categoria, sum(quantidade) as TotalVendido,
sum(quantidade * valor_unitario) as TotalArrecadação 
from vendas group by categoria;

-- total de produtos vendidos por categoria

-- valor total arrecadado por categoriavendas

-- 01
select nome, orcamento from projetos order by nome desc;

-- 02 mostre o funcionario com salário > 4000, ordenado por nome
select nome, salario from funcionarios
where salario > 4000 order by nome;

-- 03 mostre a quantidade de funcionários por departamento.
select id_departamento, count(*) as Total_de_funcionarios
from funcionarios group by id_departamento;

-- --- alterar tabela / Altarar registro --------
-- Alterar salário da Juiia
update funcionarios set salario = 6000 where id_funcionario = 3;
select * from funcionarios;

-- ADD o campo data_inicio na tabela projetos 
ALTER TABLE  projetos ADD data_inicio date;
select * from projetos;
update projetos set data_inicio = '2020-02-12' where id_projeto = 1;

-- Modificar o ta,nho do campo nome da tabela deparetamentos para varchar(150)alter
alter table departamentos modify nome varchar(150);

-- Corrigir o cargo do Carlos para 'Analista de Sistemas'
update funcionarios set cargo = 'Analista de Sistemas' where id_funcionario = 2;
select * from funcionarios;

-- Aumentar o sálario de toso os funcionarios em 10%
select nome, salario, salario * 1.1 as Salário_Reajustado  from funcionarios;
-- Saber o valor diário recebido do salário de cada funcionario
-- (base 22 dias trabalho)
select nome, salario, salario / 22 as Salario_diario from funcionarios;

-- Funcionarios com salrios maiores que 4000
-- Funcionarios com salrios maiores que 4000 e do departamento TI

select * from funcionarios where salario > 4000;
select * from funcionarios where salario > 4000 AND id_departamento = 1;

-- Visualizar projetos com orçamento entre 20000 e 50000 e que não são
-- 
select nome, orcamento, id_departamento from projetos where orcamento between 20000 and 50000 and id_departamento <> 3;

-- Moste funcionários que pertencem aos departamentos 1 (TI)
-- ou 4 (Marketing)
select nome, id_departamento from funcionarios
where id_departamento in (20, 50);

select * from funcionarios;

-- nome que contenha li
select nome from funcionarios where nome like '%li%';

-- nome que contenha primeria letra "a"
select nome from funcionarios where nome like 'a%';

-- Visualizar os projetos cujo nome contenha "Site"
-- e Orçamento abaixo de 30000
select nome, orcamento from projetos where nome like '%Site%' and orcamento < 30000;



