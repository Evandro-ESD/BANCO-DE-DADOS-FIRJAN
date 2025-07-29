-- Lista de Exercícios de Consultas - teste, responda e adicione os códigos a cada questão.
-- Cada exercício a seguir utiliza um ou mais dos itens: SELECT, WHERE, ORDER BY, operadores aritméticos, lógicos (AND, 
-- OR), operadores de comparação, LIKE, BETWEEN e IS NULL.

-- Exercício 1 – Seleção e Ordenação
-- Objetivo: Listar todos os clientes ordenados por nome em ordem crescente.
SELECT * FROM cliente order by nome asc;

-- Exercício 2 – Condição de Comparação
-- Objetivo: Listar os produtos com preço maior que 1000, ordenados pelo preço em ordem decrescente.
select nome as NOME, preco as PREÇO from produto where preco > 1000 order by preco asc;

-- Exercício 3 – Uso do BETWEEN
-- Objetivo: Selecionar os pedidos realizados entre as datas '2023-05-11' e '2023-05-14'.
select quantidade as QUANTIDADE, data_pedido as DATA_COMPRA from pedido where data_pedido between '2023-05-11' and '2023-05-14';


-- Exercício 4 – Uso do LIKE
-- Objetivo: Listar os clientes cujo e-mail contenha o domínio "cliente.com".
select * from cliente where email like '%cliente.com%';

-- Exercício 5 – Comparação Numérica
-- Objetivo: Selecionar os produtos cujo estoque seja inferior a 50 unidades.
select * from produto where estoque < 50;

-- Exercício 6 – Uso do IS NULL
-- Objetivo: Listar os fornecedores que não possuem telefone cadastrado.
-- (Observação: Se não houver registros com telefone NULL, o exercício serve para demonstrar o uso do IS NULL.)
select nome as FORNECEDORES, telefone as TELEFONE from fornecedor where telefone is null;
select nome as FORNECEDORES, telefone as TELEFONE from fornecedor where telefone <=> null;

-- Exercício 7 – Na tabela produto acrescente mais 100 no preço dos produtos e exiba em uma nova coluna com 
-- cabeçalho "Reajuste"
-- Objetivo: Apresentar valores atuais e com reajuste na consulta
select nome as PRODUTO, preco as PRECO_ATUAL, preco + 100 as PRECO_COM_REAJUSTE from produto;

-- Exercício 8 – Operadores Lógicos (AND e OR)
-- Objetivo: Selecionar os clientes cujo nome comece com 'A' ou cujo telefone seja '2345-6789'.
select nome as NOME_CLIENTE, telefone as TELEFONE from cliente where nome like 'a%' or telefone like '%2345-6789%';

-- Exercício 9 – Operadores de Comparação com BETWEEN
-- Objetivo: Selecionar os produtos com preço entre 100 e 1500.
-- Administrador de Banco de Dados – Instrutor: Nivaldo Araújo - Exercício 01 de consultas
select * from produto where preco between 100 and 1500;

-- Exercício 10 – Mostre todos os e-mails com a palavra "cliente" no corpo do e-mail e coloque em ordem decrescente.
-- Objetivo: Listar valores de texto específicos em um determinado campo da tabela.
select email from cliente where email like '%cliente%';

-- Exercício 11 – Seleção com condições compostas e ordenação
-- Objetivo: Listar os clientes que nasceram antes de 1990 e cujo nome contenha a letra "a" (em qualquer posição), 
-- ordenando os resultados pela data de nascimento em ordem decrescente.

-- select nome as CLIENTE, data_nascimento as DATA_NASCIMENTO from cliente where data_nascimento year('1990');

-- Exercício 12 – Seleção com condições lógicas e LIKE
-- Objetivo: Listar os fornecedores cuja cidade seja "São Paulo" ou "Rio de Janeiro" e cujo e-mail contenha a palavra 
-- "fornec", ordenando-os pelo nome em ordem crescente.


-- Exercício 13 – Uso de operadores aritméticos e comparação
-- Objetivo: Exibir os produtos cujo valor total em estoque (calculado como preço * estoque) seja maior que 5000, 
-- mostrando também esse valor, e ordenando os resultados de forma decrescente.


-- Exercício 14 – Seleção com BETWEEN para datas e quantidades
-- Objetivo: Listar os pedidos realizados durante o mês de maio de 2023 cuja quantidade esteja entre 1 e 3 (inclusive), 
-- ordenando os resultados pela quantidade em ordem decrescente.


-- Exercício 15 – Atualização e seleção usando IS NULL
-- Objetivo: Atualizar o registro do fornecedor "Fornecedor F" para definir o telefone como NULL e, em seguida, listar os 
-- fornecedores cujo telefone é NULL