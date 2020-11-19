import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Cart from "./Cart/Cart";
const Carts = () => {
  const [cart, setCart] = useContext(CartContext);
  const total = cart.reduce((acc, cur) => {
    return acc + cur.price;
  }, 0);
  return (
    <div>
      <p>Item dalam Cart : {cart.length}</p>
      <p>total : Rp.{total} </p>
      <Cart name={cart.name} />
    </div>
  );
};

export default Carts;
