## Exercicio 1

A) Este comando irá retirar a coluna salario da tabela ator.

B) Este comando mudará a variavel gender da tabela com string de 6 caracteres.

C) Este comando mudará a variavel gender sex para gender gender e o valor entre ( ) de 6 caracteres para 255.

D)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR (100)
```

## Exercicio 2

A)

```
UPDATE Actor SET name = "Moacyr Franco" WHERE id = "003";
```

B)

```
UPDATE Actor SET name = "JULIANA PÃES" WHERE name = "Juliana Paes";
```
```
UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PÃES";
```

C)

```
UPDATE Actor SET 
	name = "Juliana Pães",
	salary = 850000,
	birth_date = "1978-06-15",
	gender = "female"
WHERE id = "005";
```

D) Ele aparece o sinal verdinho, porem a mensagem diz que um total de 0 linhas foram afetadas porque o id procurado não existe, sendo assim, não altera nada na tabela.

## Exercicio 3

A)

```
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

B)

```
DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;
```

## Exercicio 4

A)

```
SELECT MAX(salary) FROM Actor;
```

B)

```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

C)

```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

D)

```
SELECT SUM(salary) AS total_Salarios FROM Actor;
```

## Exercicio 5

A) Irá mostrar todos os grupos que tem atribuidos a gender da tabela actor, no caso 2, female e male, se tivesse mais de 2, mostraria os outros tambem.

B)
 ```
SELECT id, name FROM Actor ORDER BY name DESC;
 ```

C)

```
SELECT * FROM Actor ORDER BY salary;
```

D)

```
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

E)

```
SELECT AVG(salary) FROM Actor GROUP BY gender;
```

## Exercicio 6

A)

```
ALTER TABLE Movie ADD playing_limit_date DATE;
```

B)

```
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

C)

```
UPDATE Movie SET playng_limit_date = "2020-11-21" WHERE id = "001";

UPDATE Movie SET playng_limit_date = "2020-05-01" WHERE id = "003";
```

D) 

```
DELETE FROM Movie WHERE id = "003";

UPDATE Movie SET synopsis = "alo alo alo" WHERE id = "003";

Volta como resultado um sinal verde, porém não afeta nenhuma linha porque não existe mais o id selecionado.
```

## Exercicio 7

A)

```
SELECT * FROM Movie WHERE rating > 7.5;
```

B)

```
SELECT AVG(rating) FROM Movie;
```

C)

```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

D)

```
SELECT COUNT(*) FROM Movie WHERE release_date < CURDATE();
```

E)

```
SELECT MAX(rating) FROM Movie;
```

F)

```
SELECT MIN(rating) FROM Movie;
```

## Exercicio 8

A)

```
SELECT * FROM Movie ORDER BY title ASC;
```

B)

```
SELECT * FROM Movie ORDER BY title DESC LIMIT 5;
```

C)

```
SELECT * FROM Movie WHERE release_date < CURDATE() LIMIT 3;
```

D)

```
SELECT * FROM Movie  ORDER BY rating DESC LIMIT 3;
```

