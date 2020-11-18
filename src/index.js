/*
  Arquivo de entrada do servidor. Possui configurações de porta, cors, etc.
*/

//Microframework para apis REST node.js
const express = require("express");
//Arquivo com as rotas da API
const routes = require("./routes");
//Criando nova instancia do express
const app = express();
//Módulo para implementação da politica de CORS
const cors = require("cors");
//Módulo para leitura simplificada do corpo de requisições HTTP
const bodyParser = require("body-parser");
//Definindo porta padrão do serviço web
const port = process.env.PORT || 8080; //porta padrão

//Definindo headers permitidos na API
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,HEAD,OPTIONS");
  res.header("Access-Control-Allow-Headers", "content-Type,x-requested-with,credencial");
  next();
});

//Aplicando politica de CORS
app.use(cors());

//Definindo json como estrutura de dado padrão
app.use(bodyParser.json());

//Definindo json como estrutura de dado padrão do express
app.use(express.json());

//Definindo arquivo de rotas que representa os end points da aplicação
app.use(routes);

//Aplicando o listener na porta definida
app.listen(port);

//Log de run
console.log("API Server Running");
