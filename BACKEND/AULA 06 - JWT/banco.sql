create database loja_play;
use loja_play;

create table usuarios(
    id int primary key auto_increment,
    login varchar(50) not null,
    senha varchar(255) not null

);
select * from usuarios;