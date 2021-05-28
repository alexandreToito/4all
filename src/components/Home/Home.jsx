import React, { useState, useContext } from "react";

import { ParseContext } from "../../context/Parse.jsx";

import "./Home.scss";
import logo from "../../media/4all.png";

import { categories, products } from "../../mock.js";

import CartIcon from "../CartIcon/CartIcon.jsx";
import Pagination from "../Pagination/Pagination.jsx";

const Home = () => {
  const [options, setOptions] = useState(null);
  const [data, setData] = useState([]);

  const { selectItem, setStart, selection } = useContext(ParseContext);

  const handleProductOptions = categoryId => {
    if (categoryId !== "all") {
      const filteredProducts = products.filter(
        product => product.categoryID === +categoryId
      );
      setOptions(filteredProducts);
    } else {
      setOptions(null);
    }
  };

  const handleClick = id => {
    if (selection.length === 0) {
      selectItem(id);
      setStart(true);
    } else {
      selectItem(id);
      setStart(false);
    }
  };

  return (
    <>
      <div className="home-header">
        <img src={logo} alt="4all" />
        <CartIcon />
      </div>

      <div className="home-wrapper">
        <select
          className="home-wrapper-select"
          name="categories"
          id="categories"
          onChange={e => {
            handleProductOptions(e.target.value);
          }}
        >
          <option className="teste" hidden>
            Selecione uma opção...
          </option>
          <option value="all">Todos os produtos</option>
          {categories.map((category, idx) => (
            <option key={idx} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className="home-wrapper-options">
          {options ? (
            <>
              {data.map((option, idx) => (
                <div className="home-wrapper-options-selected" key={idx}>
                  <div className="home-wrapper-options-selected-data">
                    <p>{option.name}</p>
                    <p>{option.description}</p>
                    <p>{`R$ ${option.price}`}</p>
                  </div>

                  <button onClick={() => handleClick(option.id)}>
                    Adicionar ao carrinho
                  </button>
                </div>
              ))}

              <Pagination array={options} pageSize={5} setData={setData} />
            </>
          ) : (
            <div>
              {data.map((product, idx) => (
                <div className="home-wrapper-options-selected" key={idx}>
                  <div className="home-wrapper-options-selected-data">
                    <p>{product.name}</p>
                    <p>{product.description}</p>
                    <p>{`R$ ${product.price}`}</p>
                  </div>

                  <button onClick={() => handleClick(product.id)}>
                    Adicionar ao carrinho
                  </button>
                </div>
              ))}
              <Pagination array={products} pageSize={5} setData={setData} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
