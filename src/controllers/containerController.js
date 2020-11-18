//Módulo com conexão ao banco de dados
const connection = require("../database/connection");

//Exporta métodos da classe container
module.exports = {
  async registra_container(request, response) {
    const { id, status, tamanho } = request.body;

    const query = "INSERT INTO container (status, tamanho, id) VALUES (?, ?, ?)";

    connection.query(query, [status, tamanho, id], async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao registrar novo container" });
      } else {
        response.status(200).send({ message: "Container registrado com sucesso" });
      }
    });
  },

  async lista_containers(request, response) {
    const id_container = request.params.id_container;

    let query = "SELECT id_container, status, tamanho FROM container";

    if (id != null) {
      query += ` WHERE id_container =${id_container}`;
    }

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao listar container (s)" });
      } else {
        response.status(200).send({ message: "Lista de containers recuperada com sucesso" });
      }
    });
  },

  async atualiza_container(request, response) {
    const { id_container, status, tamanho } = request.body;

    let query = "UPDATE usuarios SET ";

    if (status != null) query += `status = ${status}`;
    if (tamanho != null) query += `tamanho = ${tamanho}`;

    query += `WHERE id_container = ${id_container}`;

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao atulizar registro do container" });
      } else {
        response.status(200).send({ message: "Registro do container atualizado com sucesso" });
      }
    });
  },

  async remove_container(request, response) {
    const id_container = request.params.id_container;

    const query = `DELETE FROM usuarios WHERE id_container = ${id_container}`;

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao remover registro do container" });
      } else {
        response.status(200).send({ message: "Registro de container removido com sucesso" });
      }
    });
  },
};
