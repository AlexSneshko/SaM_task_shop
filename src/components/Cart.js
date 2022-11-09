import CartItem from "./CartItem";

export default function Cart(props) {
  const { cartItems } = props;

  return (
    <div className="block col-1 cart">
      <div className="row">
        <h1>Cart</h1>
      </div>
      {cartItems.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
      <div className="cart-bottom">
        <div className="row">
          <h2>Total:</h2>
          <h2>00</h2>
        </div>
        <button>Checkout</button>
      </div>
    </div>
  );
}
