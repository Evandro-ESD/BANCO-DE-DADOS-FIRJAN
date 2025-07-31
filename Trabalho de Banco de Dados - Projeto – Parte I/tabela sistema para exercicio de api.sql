CREATE database sistema;

use sistema;

create TABLE pessoa (
    id INT PRIMARY key auto_increment,
    nome VARCHAR(100),
    sexo VARCHAR(10)
);

insert into pessoa(nome, sexo)
value 
('Fátima', 'f'),('Patricia', 'f'),('Luiza', 'f');

