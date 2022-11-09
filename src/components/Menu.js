import React from "react";
import Product from "./Product";

export default function Menu(props) {
  const { products } = props;

  return (
    <main className="block col-2">
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
