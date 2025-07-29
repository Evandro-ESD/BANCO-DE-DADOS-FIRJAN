-- Consultas com JOIN

create database lista;
use lista;

create table TabelaA(
	nome varchar(50)
);

create table TabelaB(
	nome varchar(50)
);

insert into TabelaA values('Fernanda');
insert into TabelaA values('Josefa');
insert into TabelaA values('Luiz');
insert into TabelaA values('Fernando');

insert into TabelaB values('Carlos');
insert into TabelaB values('Manoel');
insert into TabelaB values('Luiz');
insert into TabelaB values('Fernando');

-- select * from tabelaa;
-- consulats com join
select a.Nome as TABELA_A, b.Nome AS TABELA_B from tabelaA as A
inner join tabelaB as B
on -- " >ON< Para comparar"
a.Nome = b.Nome;

-- CONSULA LEFT JOIN
select a.Nome as TABELA_A, b.Nome AS TABELA_B from tabelaA as A
left join tabelaB as B
on 
a.Nome = b.Nome;

-- CONSULA RIGHT JOIN
select a.Nome as TABELA_A, b.Nome AS TABELA_B from tabelaA as A
right join tabelaB as B
on 
a.Nome = b.Nome;

-- Retorne todos os registros que estão na tabela alter
-- e que não estejam na tabela begin
select a.Nome, b.nome from 
tabelaA as A
left join tabelab as B on a.nome = b.nome;






