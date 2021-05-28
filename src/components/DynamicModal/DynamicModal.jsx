import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { ParseContext } from "../../context/Parse.jsx";

import "./DynamicModal.scss";

const DynamicModal = ({ open, useCase }) => {
  const history = useHistory();
  const { clear, stopTimer } = useContext(ParseContext);

  const handleClick = () => {
    if (useCase === "empty") {
      history.push("/");
      stopTimer();
    } else {
      history.push("/");
      clear();
      stopTimer();
    }
  };

  return (
    <>
      {open && (
        <div className="modal-wrapper">
          <div className="modal">
            <div className="modal-content">
              {useCase === "empty" ? (
                <i className="fas fa-shopping-basket" />
              ) : (
                <i className="fas fa-gifts" />
              )}
              {useCase === "empty" ? (
                <p>
                  Parece que seu carrinho está vazio, clique para voltar a
                  seleção de produtos.
                </p>
              ) : (
                <p>Compra finalizada com sucesso!</p>
              )}
            </div>
            <footer className="modal-footer">
              <button onClick={() => handleClick()}>Confirmar</button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default DynamicModal;
