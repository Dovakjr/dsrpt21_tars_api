//Módulo com conexão ao banco de dados
const connection = require("../database/connection");

//Exporta métodos da classe movimentações
module.exports = {
  async registra_movimentacao(request, response) {
    const { data_movimentação, localizacao, embarcacao, id_container } = request.body;

    const query = "INSERT INTO movimentacoes (data_movimentação, localizacao, embarcacao, id_container) VALUES (?, ?, ?, ?)";

    connection.query(query, [data_movimentação, localizacao, embarcacao, id_container], async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao registrar novo log de movimentação" });
      } else {
        response.status(200).send({ message: "Log de movimentação registrado com sucesso" });
      }
    });
  },

  async lista_movimentacoes(request, response) {
    const id_container = request.params.id_container;

    let query = "SELECT data_movimentação, localizacao, embarcacao FROM movimentacoes";

    if (id_container != null) {
      query += ` WHERE id_container =${id_container}`;
    }

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao listar logs de movimentação" });
      } else {
        response.status(200).send({ message: "Lista de movimentação recuperada com sucesso" });
      }
    });
  },

  async atualiza_movimentacao(request, response) {
    const { id_movimentacao, data_movimentacao, localizacao, embarcacao } = request.body;

    let query = "UPDATE movimentacoes SET ";

    if (data_movimentacao != null) query += `data_movimentacao = ${data_movimentacao}`;
    if (localizacao != null) query += `, localizacao = ${localizacao} `;
    if (embarcacao != null) query += `, embarcacao = ${embarcacao} `;

    query += `WHERE id_movimentacao = ${id_movimentacao}`;

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao atulizar log de movimentação" });
      } else {
        response.status(200).send({ message: "Log de movimentação atualizado com sucesso" });
      }
    });
  },

  async remove_movimentacao(request, response) {
    const id_movimentacao = request.params.id_movimentacao;

    const query = `DELETE FROM movimentacoes WHERE id_movimentacao = ${id_movimentacao}`;

    connection.query(query, [email, senha, nome, sobrenome, telefone, endereco, cep, pais, empresa], async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao remover log de movimentação" });
      } else {
        response.status(200).send({ message: "Log de movimentação removido com sucesso" });
      }
    });
  },
};
