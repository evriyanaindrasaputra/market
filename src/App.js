import React from "react";
import { ItemProvider } from "./Context/ItemContext";
import "./App.css";
import Items from "./components/Items/Items";
import { CartProvider } from "./Context/CartContext";
import Carts from "./components/Carts/Carts";

function App() {
  return (
    <ItemProvider>
      <CartProvider>
        <div className="App">
          <Carts />
          <Items />
        </div>
      </CartProvider>
    </ItemProvider>
  );
}

export default App;
