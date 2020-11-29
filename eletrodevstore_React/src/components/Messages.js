import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Messages = () => {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    async function catchMessages() {
      const response = await fetch(
        "http://localhost/PHP_to_React/messages.php"
      );
      const result = await response.json();
      setMessages(result);
    }
    catchMessages();
  }, [messages]);

  return (
    <div className="messages table-responsive">
      <h2>Mensagens</h2>
      <table className="table table-striped table-dark table-bordered">
        <thead>
          <tr>
            <th>Nome:</th>
            <th>Email:</th>
            <th>Mensagem:</th>
            <th>Data:</th>
          </tr>
        </thead>
        <tbody>
            {messages &&
              messages.map(({ id_usuario, nome, email, msg, data }) => (
                <tr key={id_usuario}>
                  <td>{nome}</td>
                  <td>{email}</td>
                  <td>{msg}</td>
                  <td>{data}</td>
                </tr>
              ))}
        </tbody>
      </table >
    </div>
  );
};

export default Messages;
