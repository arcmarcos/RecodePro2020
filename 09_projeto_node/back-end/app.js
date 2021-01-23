function server(porta) {
  const express = require('express');
  const app = express();
  const cors = require('cors');

  app.use(cors());

  app.get("/", (request, response) => {
    const connect = require('./config/connect');
    
    connect.query("SELECT * FROM produtos", (error, result) => {
      if(!error) {
        response.json(result);
      } else {
        response.send(error);
      } 
    });
  });

  app.listen(porta, console.log('Servidor ativo: ', porta));
}

server(3001);
