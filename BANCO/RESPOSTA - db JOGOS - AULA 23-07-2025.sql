-- Exercícios de Consultas
-- 1. Selecione todos os jogos do gênero 'RPG'.
SELECT * FROM jogo where genero = 'rpg';

-- 2. Liste os jogadores cujo nome começa com "L".
select * from jogador where nome like 'L%';

-- 3. Mostre as compras com valor pago maior que 200.
select * from compra where valor_pago > 200;

-- 4. Liste os jogos com preço entre 100 e 300.
select * from jogo where preco between 100 and 300;

-- 5. Mostre os jogos que não são do gênero 'FPS'.
select * from jogo where genero != 'fps';

-- 7. Mostre os jogos com título contendo "Impact".
select titulo from jogo where titulo like '%impact%';

-- 8. Exiba as compras feitas entre '2024-03-01' e '2024-03-10'.
select * from compra where data_compra between '2024-03-01' and '2024-03-10';

-- 9. Liste os jogos com preço maior que 0 e menor ou igual a 250.
select titulo, preco from jogo where preco > 0 and preco < 250;

-- 10. Mostre os nomes e e-mails dos jogadores com nome contendo "a".
select nome, email from jogador where nome like "%a%";

-- 11. Mostre os jogos cujo preço seja maior que 100 ou do gênero 'Aventura'.
select * from jogo where preco > 100 or genero = 'aventura';


