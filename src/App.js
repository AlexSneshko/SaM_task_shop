import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="row">
        <Menu />
        <Cart />
      </div>
    </div>
  );
}

export default App;
