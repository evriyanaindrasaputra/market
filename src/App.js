import React from "react";
import { ItemProvider } from "./Context/ItemContext";

import { CartProvider } from "./Context/CartContext";
import Routes from "./Config/Routes";
import { Container } from "@material-ui/core";

function App() {
  return (
    <ItemProvider>
      <CartProvider>
        <Container maxWidth="lg">
          <div className="App">
            <Routes />
          </div>
        </Container>
      </CartProvider>
    </ItemProvider>
  );
}

export default App;
