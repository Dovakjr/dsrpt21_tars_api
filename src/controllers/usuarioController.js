//Módulo com conexão ao banco de dados
const connection = require("../database/connection");

//Exporta métodos da classe Usuário
module.exports = {
  async registra_usuario(request, response) {
    const { email, senha, nome, sobrenome, telefone, endereco, cep, pais, empresa } = request.body;

    const query = "INSERT INTO usuarios (email, senha, nome, sobrenome, telefone, endereco, cep, pais, empresa) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    connection.query(query, [email, senha, nome, sobrenome, telefone, endereco, cep, pais, empresa], async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao registrar novo usuário" });
      } else {
        response.status(200).send({ message: "Usuario registrado com sucesso" });
      }
    });
  },

  async lista_usuarios(request, response) {
    const id = request.params.id;

    let query = "SELECT email, senha, nome, sobrenome, telefone, endereco, cep, pais, empresa FROM usuarios";

    if (id != null) {
      query += ` WHERE id =${id}`;
    }

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao listar usuário (os)" });
      } else {
        response.status(200).send({ message: "Lista de usuários recuperada com sucesso" });
      }
    });
  },

  async atualiza_usuario(request, response) {
    const { id, nome, sobrenome, telefone, endereco, cep, pais, empresa } = request.body;

    let query = "UPDATE usuarios SET ";

    if (nome != null) query += `nome = ${nome} `;
    if (sobrenome != null) query += `, sobrenome = ${sobrenome} `;
    if (telefone != null) query += `, telefone = ${telefone} `;
    if (endereco != null) query += `, endereco = ${endereco} `;
    if (cep != null) query += `, cep = ${cep} `;
    if (pais != null) query += `, pais = ${pais} `;
    if (empresa != null) query += `, empresa = ${empresa} `;

    query += `WHERE id = ${id}`;

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao atulizar cadastro do usuário" });
      } else {
        response.status(200).send({ message: "Cadastro do usuário atualizado com sucesso" });
      }
    });
  },

  async remove_usuario(request, response) {
    const id = request.params.id;

    const query = `DELETE FROM usuarios WHERE id = ${id}`;

    connection.query(query, async function (error, rows, fields) {
      if (error) {
        return response.status(400).send({ message: "Erro ao remover usuário" });
      } else {
        response.status(200).send({ message: "Usuario removido com sucesso" });
      }
    });
  },
};
