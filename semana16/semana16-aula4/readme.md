## Ecercicio 1

A) É um campo que estabelece a relação entre duas tabelas. Portanto, uma coluna corresponde à mesma coluna, que é a chave primária de outra tabela. Sendo assim, em uma tabela que contém chaves estrangeiras, você deve especificar quais colunas estão relacionadas a qual tabela.

B)

```
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Fuck you, fuck tu, fuck o caralho todo!! kkkk",
    10,
		"004"
);
```

C) Não tem como adicionar ou alterar o id selecionado porque ele não existe na tabela.

D)

```
ALTER TABLE Movie DROP COLUMN rating;
```

E) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Não se pode apagar ou alterar uma linha de tabela que já tenha um "filho" foreign key, teria que apagar a avaliaçao primeiro para depois apagar o filme.

## Exercicio 2

A) A tabela MovieCast será criada com os ids dos filmes e atores juntamente com suas foreign key's.

B)

```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "005"
);
```

C) Não tem como adicionar ou alterar o id selecionado porque ele não existe na tabela.

D) Não é possível excluir ou atualizar uma linha pai: uma restrição de chave estrangeira falha. Não se pode apagar ou alterar uma linha de tabela que já tenha um "filho" foreign key, teria que apagar a avaliaçao primeiro para depois apagar o filme.

## Exercicio 3

A) A query irá juntar a tabela filme coma de avaliação, assim exibindo uma unica quando der select e mostrar todos os filmes.

B)

```
SELECT m.id as movie_id, m.title as tilulo r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

## Exercicio 4

A)

```
SELECT m.id as movie_id, m.title, r.rate as rating, r.comment as rating_comment FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```

B)

```
SELECT m.id as movie_id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```

C)

```
SELECT AVG(r.rate), m.id, m.title FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```

## Exercicio 5

A) seleciona todos os filmes da tabela movie, o primeiro join junta o cast no movie.id o segundo join junta a tabela ator no a.id. Sendo assim depois disso junta as duas tabelas independentes.

B)

```
SELECT m.id as movie_id, m.title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;
```

C) 1054. unknown column 'm' in 'field list'. Não é possivel rodar o codigo, porque a coluna 'm' não existe. Existe um erro de sintaxe no codigo tambem, na parte ' m,title' deveria ser 'm.title'.

## Exercicio 6

A) é uma relação de muitos para varios, tanto o filme quanto o oscar pode receber varios tipos.

B)

```
create table Oscar (
	id varchar(255) primary key,
    name varchar (255)
);

create table Premiacao (
	movie_id varchar(255),
    oscar_id varchar(255),
    ano int,
    foreign key (movie_id) references Movie(id),
    foreign key (oscar_id) references Oscar(id)
);
```

C)

```
insert into Premiacao (movie_id, oscar_id, ano)
values (
	"004",
    "A",
    2008
);
```

D)

```
select title, type, ano from Movie m
left join Premiacao p on m.id = p.movie_id
join Oscar o on o.id = p.oscar_id;
```