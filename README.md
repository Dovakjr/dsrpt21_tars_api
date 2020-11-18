## Sobre
Segunda parte da avaliação de Sistemas Distribu79524os e Dloud Computing, projeto DSRPT21.

API Node.js para controle e rastreio de containers.


## Grupo / Integrantes
- Mateus Amaral, RM79346
- Uriel Alves,   RM79110
- Keven Lopes,   RM79524

- Grupo TARS, manhã


## Estrutura do projeto
Arquivos .gitatributes, .gitignore, package-lock.json e package.json são arquivos de configuração git e node.js

Arquvio index.js contém configurações do servidor (politica cors, portas, etc..)

Arquivo routes.js contem a documentação e configuração de todos os end-points da API.

Na pasta controller estão as classes que representam as regras de negócio da aplicação. Cada classe possui metódos que manipulam o banco de dados.

Na pasta database está o arquivo de conexão ao banco de dados que ao ser instanciado gera o DAO.
