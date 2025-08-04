create database oficina;

use oficina;

create table clientes(
	id int primary key auto_increment,
    nome varchar(100),
    cpf varchar(14),
    sexo varchar(10)
);

insert into 
	clientes (nome, cpf, sexo)
values
	('Frodo Bolseiro', '123.456.789-00', 'M'),
	('Galadriel', '234.567.890-11', 'F'),
	('Aragorn Elessar', '345.678.901-22', 'M'),
	('Éowyn de Rohan', '456.789.012-33', 'F'),
	('Gimli, filho de Glóin', '567.890.123-44', 'M');