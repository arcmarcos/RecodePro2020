import React from "react";
import { NavLink } from "react-router-dom";
import "../style/header.css";
import "../style/cart.css";

const Header = () => {
  return (
      <header>
        <div className="topBar">
          <NavLink to="/" end>
            <img src="../images/eds_logo.png" alt="logotipo da loja" />
          </NavLink>

          <div className="searchDiv">
            <input type="text" id="searchBar" placeholder="Pesquisar" />
            <button id="searchButton" type="submit">
              <i className="fa fa-search"></i>
            </button>
          </div>

          <div className="cartIconContainer">
            <button className="cartIcon">
              <i className="fas fa-shopping-basket"></i>
              <span className="cartCount">0</span>
            </button>
          </div>
        </div>

        <nav className="navMenu">
          <NavLink to="produtos">Produtos</NavLink>
          <NavLink to="lojas">Lojas</NavLink>
          <NavLink to="contato">Contato</NavLink>
        </nav>
      </header>
  );
};

export default Header;
