import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { ParseContext } from "../../context/Parse.jsx";

import DynamicModal from "../DynamicModal/DynamicModal.jsx";
import Timer from "../Timer/Timer.jsx";

import "./Cart.scss";

const Cart = () => {
  const [modalState, setModalState] = useState(false);
  const [modalCase, setModalCase] = useState(null);

  const history = useHistory();

  const { selection, selectItem, removeItem, totalPrice } =
    useContext(ParseContext);

  useEffect(() => {
    if (selection.length === 0) {
      setModalState(true);
      setModalCase("empty");
    }
  }, [selection]);

  return (
    <>
      <header className="cart-header">
        <button title="Voltar" onClick={() => history.goBack()}>
          <i className="fas fa-arrow-left" />
        </button>
        <h3>Seu Carrinho</h3>
      </header>
      <div className="cart-timer">
        <p>Tempo para finalizar a compra</p>
        <Timer />
      </div>

      <div className="cart-wrapper">
        <div className="cart-wrapper-scroll">
          {selection.map((p, index) => (
            <div className="cart-wrapper-content" key={index}>
              <div className="cart-wrapper-controllers">
                <button onClick={() => selectItem(p.id)}>
                  <i className="fas fa-plus" />
                </button>
                <span>{p.quantity}</span>
                <button onClick={() => removeItem(p.id)}>
                  <i className="fas fa-minus" />
                </button>
              </div>
              <span>{p.name}</span>
              <div className="cart-wrapper-content-value">
                <span>R$</span>
                <span>{p.totalValue.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="cart-wrapper-total">
          <span>Total</span>
          <div className="cart-wrapper-total-value">
            <span>R$</span>
            <span>{totalPrice.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-wrapper-checkout">
          <button
            onClick={() => {
              setModalState(true);
              setModalCase("end");
            }}
          >
            Finalizar Compra
          </button>
        </div>
      </div>

      <DynamicModal open={modalState} useCase={modalCase} />
    </>
  );
};

export default Cart;
