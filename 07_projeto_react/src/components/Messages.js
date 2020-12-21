import React from "react";
import "bootstrap/dist/css/bootstrap.css";

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
    <div className="messages container">
      <h2>Mensagens</h2>
      <ul className="list-group ">
        {messages &&
          messages.map(({ id_usuario, nome, email, msg, data }) => (
            <li
              key={id_usuario}
              className="list-group-item flex-column align-items-start d-flex bg-dark"
            >
              <h5 className="mt-3 text-secondary">{nome}</h5>
              <small className="text-secondary">{email}</small>
              <small className="text-secondary">{data}</small>
              <h5 className="mt-3 text-light">{msg}</h5>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Messages;
