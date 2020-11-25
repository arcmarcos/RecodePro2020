import React from "react";


const Contato = () => {
  return (
    <main>
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

      <form className="contactForm" method="POST" action="">
        <h3>Formulário para contato</h3>

        <label for="nome"
          >Nome:
          <input
            type="text"
            id="name"
            name="nome"
            placeholder="Digite seu nome"
            required
          />
        </label>
        <label for="email"
          >Email:
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu Email"
            required
          />
        </label>

        <h4>Mensagem</h4>
        <textarea
          name="msg"
          id="messageField"
          cols="50"
          rows="10"
          placeholder="Digite sua mensagem"
          required
        ></textarea>
        <button type="submit" className="buttonContact">Enviar</button>
      </form>
    </main>
  );
};

export default Contato;
