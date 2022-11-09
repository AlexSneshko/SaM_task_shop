import React from "react";

export default function CartItem(props) {
  const { product } = props;

  return (
    <div className="cartItem">
      <div>
        <p>{product.name}</p>
        <p>
          ${product.price} x {product.quantity}
        </p>
      </div>
    </div>
  );
}
