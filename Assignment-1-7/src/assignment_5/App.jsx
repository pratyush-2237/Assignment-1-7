import React from "react";
import { CartProvider } from "./context/CartContext";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header>
          <h1>Online Shopping Cart</h1>
        </header>

        <main>
          <section>
            <h2>Product List</h2>
            <ProductList />
          </section>

          <section>
            <Cart />
          </section>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;