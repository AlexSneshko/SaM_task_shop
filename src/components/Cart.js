import CartItem from "./CartItem";

export default function Cart(props) {
  const { cartItems, onAdd, onRemove, onClear, onCleanCart, onCheckout } =
    props;
  const totalPrice = cartItems.reduce(
    (sum, cur) => sum + cur.price * cur.quantity,
    0
  );

  return (
    <div className="block col-1 cart">
      <div className="row">
        <h1>Cart</h1>{" "}
        <button onClick={() => onCleanCart()}>
          <i class="gg-trash"></i>
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((product) => (
            <CartItem
              key={product.id}
              product={product}
              onAdd={onAdd}
              onRemove={onRemove}
              onClear={onClear}
            />
          ))}
          <div className="cart-bottom">
            <div className="row">
              <h2>Total:</h2>
              <h2>{totalPrice.toFixed(2)}</h2>
            </div>
            <button onClick={() => onCheckout()}><h2>Chekout</h2></button>
          </div>
        </div>
      )}
    </div>
  );
}
