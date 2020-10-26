## Exercicio 1

A) Res:
 
1. CREATE TABLE: comando para criar tabelas no sql que tem o nome da mesma juntamente com os nomes e tipos das colunas adicionadas nela.

2. VARCHAR:  serve pra declarar que pode ser usado caracteres de comprimento indetermidado.

3. PRIMARY KEY: identificador de cada "ator" no caso, seria as IDs unicas de cada um.

4. NOT NULL: o campo que estiver declarado desta forma, não poderá ser deixado em branco ou definido como null.

5. DATE: declara que pode ser usado datas neste campo e será mostrado desta forma "11/05/1998"

B) Res:

1. SHOW DATABASES: mostra todos os bancos de dados no servidor sql.

2. SHOW TABLES: motra todas as tabelas no banco de dados.

C) Res: mostra os campos da tabela com os tipos de dados que vão ser inseridos no banco de dados.

## Exercicio 2

A) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

B) Res: Duplicate entry '002' for key 'PRIMARY'. O erro ocorreu, porque quando foi criado a tabela, foi deixado o valor do ID como primary key, sendo assim, são exclusivas de cada ator que for adicionado, não tendo como repetir o mesmo numero da key em outro ator.

C) Res: Column count doesnt match value count ar row 1. Está faltando duas variaveis na linha de insert into actor.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```

D) Res: Field 'name' doesnt have a default value. O campo nome não está declarado como default ou null, sendo assim etá faltando colocar entre aspas o nome do ator da table do insert.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Miguel Falabella",
  400000,
  "1949-04-18", 
  "male"
);
```

E) Res: Incorrect date value: '1950' for column 'birth_date'. Está faltado as aspas na linha onde está sendo inserida a data de nascimento do ator.

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```

F) a)

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Flávia Alessandra",
  900000,
  "1974-06-07", 
  "female"
);
```

F) b) 

```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);
```

 ## Exercicio 3

A)

```
SELECT * from Actor WHERE gender = "female";
```

B)

```
SELECT salary from Actor WHERE name = "Tony Ramos";
```

C) Res: Ele funcionou e retornou 0 linhas, porque não tem inserts como invalidas no banco de dados.

```
SELECT * from Actor WHERE gender = "invalid"
```

D) Res: retornou os atores/atrizes: Tony Ramos, Fernanda Montenegro, Miguel Falabella e Antonio Fagundes.

```
SELECT id, name, salary from Actor WHERE salary < 500000;
```

E) Res: Unknow column 'nome' in 'field list'. O erro ocorreu porque não existe variavel com o tipo 'nome' e sim um com tipo 'name'.

```
SELECT id, name from Actor WHERE id = "002"
```

## Exercicio 4

A) Res: linha 1 -> Será selecionado todos os atores da taebla atores. linha 2 -> Onde os atores cujo nome começa com A ou j, juntamente com a logica de ter um salario maior que 300.000 serão selecionados e mostrados no result grid.

B) 

```
SELECT * FROM Actor
WHERE (name LIKE "T%" OR name LIKE "M%") AND salary > 350000;
```

C)
```
SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "g%");
```

D)
```
SELECT * FROM Actor
WHERE (name LIKE "a%" OR name LIKE "A%" OR name LIKE "g%" OR name LIKE "G%") AND salary BETWEEN 350000 AND 900000;
```

## Exercicio 5

A) Res: será criada uma tabela chamada movie com as variaveis: id, titulo, sinopse, data de lançamento e avaliação.

```
CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synopsis TEXT NOT NULL,
    release_Date DATE NOT NULL,
    rating INT NOT NULL
);
```

B) 

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```

C)

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```

D)

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```

E)

```
INSERT INTO Movie (id, title, synopsis, release_Date, rating)
VALUES(
  "004", 
  "Meu Nome Não É Johnny",
  "João Guilherme Estrella é um jovem da classe média que se torna o rei do tráfico de drogas da zona sul do Rio de Janeiro. O rapaz inteligente e adorado pelos pais passa a ser investigado pela polícia e enfrenta a dura realidade de um criminoso.",
  "2008-01-04", 
  10
);
```

## Exercicio 6

A)

```
SELECT id, title, rating from Movie WHERE id = "004";
```

B)

```
SELECT title from Movie WHERE title = "Doce de mãe";
```

C) 

```
SELECT id, title, synopsis from Movie WHERE rating = "7";
```

## Exercicio 7

A)

```
SELECT * FROM Movie WHERE title LIKE "%vida%";
```

B)

```
SELECT * FROM Movie WHERE title LIKE "%jh%" OR synopsis LIKE "%vida%";
```

C)

```
SELECT * FROM Movie WHERE release_date < "2020-10-26";
```

D)

```
SELECT * FROM Movie WHERE release_date < "2020-10-26" AND 
      (title LIKE "%se%" OR synopsis LIKE "%crime%") AND rating > 7;
```
