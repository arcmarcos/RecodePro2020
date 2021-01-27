const Message = require('../models/Message');

class MessagesController {
  messageAction(req, res) {
    Message.getAll(req, res)
  }

  registerMessageAction(req, res) {
    const { nome, email, msg } = req.body;
    
    Message.nome = nome;
    Message.email = email;
    Message.msg = msg;
    Message.registerMessage(req, res);
  }
}

module.exports = new MessagesController;