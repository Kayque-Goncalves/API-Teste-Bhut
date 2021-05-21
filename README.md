# API Teste Bhut

## O que utilizei no desenvolvimento:

Nesse projeto estou utilizando Typescript para o desenvolvimento da API node.

#### Bibliotecas:

- bcryptjs
- express
- jsonwebtoken
- sqlite3
- typeorm

## Como utilizar:

> Aviso: Estou seguindo o procedimento padrão considerando a utilização do vscode como editor, caso esteja utilizando outro editor de código considere que todas as instruções relacionadas ao terminal devem ser executadas da mesma forma no seu prompt (cmd ou powershell).

Primeiramente, crie uma pasta no diretório de sua preferência e acesse-a para poder clonar este repositório.

Assim que a pasta for criada, execute o seguinte comando em seu terminal:

```bash
  git clone https://github.com/Kayque-Goncalves/API-Teste-Bhut.git
```

A seguir seguem os comando necessários para fazer o setup do projeto:

```bash
  cd server     // entra no diretório raiz.
  yarn install   // instala todas as dependencias.
```

## Rodando o servidor

Para rodar o servidor basta executar o seguinte comando:

```bash
  yarn dev
```

## Preparando o banco de dados

> Aviso: Escolhi utilizar o SQlite como banco de dados apenas por uma questão de praticidade, já que sempre utilizo ele para fazer meus testes. Eu particularmente utilizo o **Beekeeper Studio** para checar os dados registrados.

Execute as duas migrations, para que as tabelas possam ser criadas automaticamente com o seguinte comando:

```bash
  yarn typeorm migration:run
```

## Definindo Rotas para teste

A seguir, seguem os exemplos das rotas da API assim como o formato das requisições.

- Rota de criação de usuário:
  ![createUser](/.github/createUser.PNG)

- Rota de autenticação:
  ![auth](/.github/auth.PNG)

- Rota de criação de carros:
  ![createCar](/.github/createCar.PNG)

- Rota de exibição de carros registrados:
  ![showCars](/.github/showCars.PNG)

- Rota de alteração de registro:
  ![updateCar](/.github/updateCar.PNG)

- Rota de exclusão de registro:
  ![deleteCar](/.github/deleteCar.PNG)

### Observações adicionais

Existem 3 rotas protegidas que só podem ser acessadas depois que o usuário for autorizado, são elas:

- Rota de Criação de carro
- Rota de Alteração de registro
- Rota de Exlusão de registro

Então assim que você gerar o token do usuário _(rota de autenticação)_, informe nas 3 rotas, dentro da aba de Auth o tipo do token (nesse caso Bearer) e o token que foi exibido.
![token](/.github/token.PNG)

Sempre que você realizar uma operação e quiser ver se ela foi realizada como o esperado, basta executar a rota de exibição novamente.
