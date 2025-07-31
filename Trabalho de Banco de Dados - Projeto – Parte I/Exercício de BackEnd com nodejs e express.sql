create database cadastro;
use cadastro;
create table cliente(
	id int not null primary key auto_increment,
    nome varchar(250),
    cpf varchar(11)
);

select * from cliente;

insert into 
	cliente(nome) 
values
	('Frodo');
