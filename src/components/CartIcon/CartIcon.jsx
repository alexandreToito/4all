import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ParseContext } from "../../context/Parse.jsx";

import "./CartIcon.scss";

const CartIcon = () => {
  const { selection, totalQuantity } = useContext(ParseContext);

  const history = useHistory();

  return (
    <div className="cartIcon-wrapper">
      <div
        className="cartIcon-wrapper-icons"
        title="Seu carrinho"
        onClick={() => history.push("/checkout")}
      >
        <i className="fas fa-shopping-cart" />
        <button>{totalQuantity}</button>
      </div>
      <div className="cartIcon-wrapper-content">
        <div className="cartIcon-wrapper-content-header">
          <p>Produto</p>
          <p>Quantidade</p>
        </div>
        <hr />

        {selection.length > 0 ? (
          selection.map((product, idx) => (
            <div key={idx} className="cartIcon-wrapper-content-name_price">
              <p>{product.name}</p>
              <p>{product.quantity}</p>
            </div>
          ))
        ) : (
          <div className="cartIcon-wrapper-content-empty">
            <i className="fas fa-shopping-basket" />
            <p>Seu carrinho está vazio</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartIcon;
