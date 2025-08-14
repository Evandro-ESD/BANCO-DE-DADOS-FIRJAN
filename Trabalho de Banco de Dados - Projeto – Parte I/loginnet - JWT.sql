create database loginnet;
use loginnet;

create table users(
	id int primary key auto_increment,
    login varchar(100),
    senha varchar(100),
    role enum('adm', 'user') not null default 'user'
);

INSERT INTO
	users(login, senha, role) 
VALUES 
	('admin', 'admin123', 'adm'),
	('user','user123','user')