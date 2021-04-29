import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import products from "./products";

const App = () => {
  const filteredProducts = products.filter(product => product.id < 4);
  return (
    <div className="app">
      <div className="content">
        <h1 className="mainHeader">Список товаров</h1>
        <ul className="list">
          {filteredProducts.map(product => (
            <li className="list-item" key={product.id}>
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
