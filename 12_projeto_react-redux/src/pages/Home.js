import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ModalImage from 'react-modal-image';

const Home = () => {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const offerProduct = products[0];

  return (
    <main>
      <h2 className="welcomeTitle">
        Bem vindo, a <span>Eletro Dev Store!</span>{" "}
      </h2>

      <section className="offerSection">
        <div className="offerCards">
          <ModalImage
            className="image"
            small={offerProduct.imagem}
            large={offerProduct.imagem}
            alt={offerProduct.imagem}
          />

          <h3>{offerProduct.descricao}</h3>
          <p className="oldPrice">
            {offerProduct.preco_antigo.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <p className="newPrice">
            {offerProduct.preco_novo.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button onClick={() =>
                  dispatch({ type: "ADD_TO_CART", id: offerProduct.id_produto })
                }>
            <i className="fas fa-shopping-basket"></i>Comprar
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
