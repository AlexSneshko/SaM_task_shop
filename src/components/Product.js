import React from "react";

export default function Product(props) {
  const { product } = props;

  return (
    <div className="card">
      <img src={product.image} alt="Product" className="small"></img>
      <div className="info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="row">
          <h3>$ {product.price.toFixed(2)}</h3>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}
