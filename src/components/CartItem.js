import React from "react";

export default function CartItem(props) {
  const { product, onAdd, onRemove, onClear } = props;

  return (
    <div className="cartItem">
      <div>
        <p>{product.name}</p>
        <p>
          ${product.price} x {product.quantity}
        </p>
      </div>
      <div className="buttons">
        <button onClick={() => onAdd(product)}>+</button>
        <button onClick={() => onRemove(product)}>-</button>
        <button className="close" onClick={() => onClear(product)}>x</button>
      </div>
    </div>
  );
}
