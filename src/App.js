import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);

    if (exist.quantity === 1) {
      onClear(product);
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  const onClear = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const onCleanCart = () => {
    setCartItems([]);
  };

  const onCheckout = () => {
    alert("Thank you for your purchase");
    setCartItems([]);
  };

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Menu products={products} onAdd={onAdd} />
        <Cart
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onClear={onClear}
          onCheckout={onCheckout}
          onCleanCart={onCleanCart}
        />
      </div>
    </div>
  );
}

export default App;
