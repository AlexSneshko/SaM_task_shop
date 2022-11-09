import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";
import data from "./data";

function App() {
  const { products } = data;

  return (
    <div className="App">
      <Header />
      <div className="row">
        <Menu products={products} />
        <Cart />
      </div>
    </div>
  );
}

export default App;
