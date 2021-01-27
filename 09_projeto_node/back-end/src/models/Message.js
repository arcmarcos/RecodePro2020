const connect = require("../config/connect");

class Message {
  constructor() {
    this.id_usuario;
    this.nome;
    this.email;
  }

  registerMessage(req, res) {
    connect.query(
      `
      INSERT INTO usuarios
      VALUES (
        NULL, '${nome}', '${email}'
      );
  
      INSERT INTO mensagens (id_usuario, msg)
      VALUES (
        LAST_INSERT_ID(), '${msg}'
      );`,
      (error, result) => {
        if (!error) res.json(result);
        else res.send(error);
      }
    );
  }

  getAll(req, res) {
    connect.query(
      `
      SELECT * FROM usuarios
      JOIN mensagens
      ON usuarios.id_usuario = mensagens.id_usuario
    ;`,
      (error, result) => {
        if (!error) res.json(result);
        else res.send(error);
      }
    );
  }
}

module.exports = new Message;
