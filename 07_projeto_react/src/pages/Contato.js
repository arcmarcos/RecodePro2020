import React from "react";
import Form from "../components/Form";
import Messages from "../components/Messages";


const Contato = () => {
  return (
    <main>
      <h2>Contato</h2>
      <address>
        <div className="contact">
          <i className="fab fa-whatsapp"></i>
          <p>Tel: 21 99999-9999</p>
        </div>
        <div className="contact">
          <i className="fas fa-at"></i>
          <p>contato@eds.com.br</p>
        </div>
      </address>
      <Form />
      <hr/>
      <Messages />
      <hr/>
    </main>
  );
};

export default Contato;
