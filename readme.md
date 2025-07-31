📘 Curso de Banco de Dados – FIRJAN / TI
📂 Conteúdo das Aulas
1. Introdução
Conceito de banco de dados

Importância dos dados organizados

Diferença entre dados e informações

2. Abordagem Entidade-Relacionamento
Conceito de entidade e atributo

Relacionamentos (1:1, 1:N, N:N)

Diagrama ER (Entidade-Relacionamento)

3. Abordagem Relacional
Tabelas como representação de entidades

Colunas e tuplas

Integridade referencial

4. Modelo Conceitual x Modelo Lógico
Diferença entre níveis de abstração

Modelo conceitual (ER)

Modelo lógico (estrutura de tabelas)

5. Criando um Banco de Dados no MySQL
Comandos CREATE DATABASE e CREATE TABLE

Tipos de dados (INT, VARCHAR, DATE, etc.)

Utilização do MySQL Workbench ou terminal

6. Chaves, Relacionamentos e Cardinalidades no MySQL
PRIMARY KEY, FOREIGN KEY, AUTO_INCREMENT

Relacionamentos entre tabelas

Regras de cardinalidade e integridade

7. Exercitando MySQL
Inserção de dados com INSERT

Atualização com UPDATE

Exclusão com DELETE

8. Consultas Com Operadores
WHERE, IN, LIKE, IS NULL, BETWEEN

Filtros com AND / OR

9. Funções do MySQL
Agregações: SUM(), AVG(), COUNT(), MAX(), MIN()

Funções de data: NOW(), YEAR(), DATE()

10. Agrupamentos e União de Tabelas
GROUP BY e ORDER BY

Uso de subconsultas

UNION e UNION ALL

11. Junções e Visualizações de Tabelas
INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN

Exibição de dados combinados entre tabelas

Criação de visões com CREATE VIEW

12. SQL Joins
Casos práticos com 2 ou mais tabelas

Relacionamento Cliente–Pedido–Produto

Boas práticas no uso de JOINs

API RESTful para Cadastro de Clientes com Node.js e MySQL
1. Motivação
Este projeto tem como objetivo criar uma API simples para gerenciar clientes utilizando Node.js e banco de dados MySQL. O foco principal é garantir a conexão correta com o banco e expor uma rota que permita consultar todos os clientes cadastrados.

2. Situação
O banco de dados já existe e se chama Cadastro, contendo uma tabela Cliente com os campos:

1. Estratégia
2. 
O sistema realiza as seguintes funções:

Estabelece a conexão com o banco de dados MySQL.

Testa se a conexão foi realizada com sucesso.

Cria um servidor Express que disponibiliza a rota GET /mostrar, que retorna todos os clientes cadastrados na tabela Cliente.

4. Como usar
Pré-requisitos
Node.js instalado

MySQL rodando com o banco Cadastro criado

Ferramenta para testar APIs (Insomnia, Postman ou navegador)

Instalação

Clone o repositório:

git clone <URL_DO_REPOSITORIO>

Instale as dependências:

npm install

Configure o arquivo de conexão com o MySQL (config.js ou diretamente no código), definindo:

Host

Usuário

Senha

Nome do banco (Cadastro)

Rodar o servidor

node index.js

Testar a API
Abra o navegador ou Insomnia/Postman.

Acesse a rota:

GET http://localhost:3001/mostrar
Você deverá receber uma lista JSON com todos os clientes cadastrados.

1. Código de exemplo (simplificado)
js
Copiar código
const express = require('express');
const mysql = require('mysql');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'Cadastro',
});

db.connect(err => {
  if (err) {
    console.error('Erro ao conectar no banco:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL!');
});

app.get('/mostrar', (req, res) => {
  const sql = 'SELECT * FROM Cliente';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ erro: 'Erro ao buscar clientes' });
    }
    res.json(results);
  });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

6. Considerações Finais
Este projeto serve como base para desenvolvimento de APIs RESTful integradas a bancos MySQL, podendo ser expandido com rotas para inserção, atualização e exclusão de clientes.