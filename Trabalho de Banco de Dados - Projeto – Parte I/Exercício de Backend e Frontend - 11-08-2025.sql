create database GameShelf;
use GameShelf;
create table catalogo(
	id int primary key auto_increment,
    nome varchar(100),
    tipo varchar(100),
    ano date
);

