## Ecercicio 1

A)  -> O salt acrescenta aleatoriamente sequencias de caracteres a senha, projetando resultados criptograficos complexos e aumentando a segurança da senha.
    -> O round é a quantidade de hashes por segundo que sao geradas e o custo de processamento para gerar as hashes. O valor padrao utilizado é 10. Quanto maior o valor do round mais tempo será levado para calcular o hash da senha.

## Exercicio 2

A) Deverá ser implementado primeiro o signup, porque é dele que o banco recebe a senha do usuario para poder armazenar, sendo assim, nao tem como um usuario logar sem nem mesmo ser cadastrado.

D) Não será necessaria a alteração do profile, pois lá só é pegado o usuario por id e passado as informações como: nome e email no body, não tem requisição de senha.

## Exercicio 3

A)

```
ALTER TABLE Users ADD COLUMN role VARCHAR(255) DEFAULT "normal";
```

