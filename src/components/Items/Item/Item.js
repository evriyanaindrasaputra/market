import React, { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

const Item = ({ name, price }) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const cart = { name: name, price: price };
    setCart((current) => [...current, cart]);
  };
  return (
    <div className="item">
      <p>{name}</p>
      <p>Rp.{price}</p>
      <button onClick={() => addToCart()}>add to cart</button>
    </div>
  );
};

export default Item;
