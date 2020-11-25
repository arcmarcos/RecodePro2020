import React from "react";
import "../style/main.css";

const Home = () => {
  return (
    <main>
      <h2 className="welcomeTitle">
        Bem vindo, a <span>Eletro Dev Store!</span>{" "}
      </h2>

      <section className="offerSection">
        <h3>Oferta do dia</h3>
        <div className="offerCards">
          <img
            className="image"
            src="./images/produtos/ps5.jpg"
            alt="PS5"
            onClick="showIn(this)"
          />
          <h3>Sony PlayStation 5 2020</h3>
          <p className="oldPrice">R$ 4.999,00</p>
          <p className="newPrice">R$ 4.499,00</p>
          <button onClick={"cartUpValue()"}>
            <i className="fas fa-shopping-basket"></i> Comprar
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
