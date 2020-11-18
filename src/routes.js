/*
  Contém todas as rotas do servidor separadas por área de negócio. cada rota possui um controller associado.
*/

//Importando o roteador da biblioteca express para utilizar como roteador padrão
const express = require("express");
const routes = express.Router();

//Importando Controllers
const containerController = require("./controllers/containerController");
const movimentacaoController = require("./controllers/movimentacoesController");
const usuarioController = require("./controllers/usuarioController");

/*
  Rotas de usuário
*/
//Cria usuário
routes.post("/usuario/", usuarioController.registra_usuario);
//Lista usuários
routes.get("/usuario/:id?", usuarioController.lista_usuarios);
//Atualiza um perfil de usuário
routes.put("/usuario/", usuarioController.atualiza_usuario);
//Exclui um usuário
routes.delete("/usuario/:id?", usuarioController.remove_usuario);

/*
  Rotas de containers
*/
//Cria um novo registro de container
routes.post("/container/", containerController.registra_container);
//Lista containers
routes.get("/container/:id_container?", containerController.lista_containers);
//Atualiza informações de um container
routes.put("/container/", containerController.atualiza_container);
//Exclui o registro de um container
routes.delete("/container/:id_container?", containerController.remove_container);

/*
  Rotas de movimentacoes
*/
//Cria um novo registro de movimentação
routes.post("/movimentacoes/", movimentacaoController.registra_movimentacao);
//Lista movimentações
routes.get("/movimentacoes/:id_movimentacao?", movimentacaoController.lista_movimentacoes);
//Atualiza o registro de um movimentação
routes.put("/movimentacoes/", movimentacaoController.atualiza_movimentacao);
//Exclui o registro de uma movimentação
routes.delete("/movimentacoes/:id_movimentacao?", movimentacaoController.remove_movimentacao);

module.exports = routes;
