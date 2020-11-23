import React from "react";
import { Navbar } from "../../components";

const Cart = () => {
  const newcart = JSON.parse(localStorage.getItem("cart"));
  console.log(newcart);
  return (
    <div>
      <Navbar />
      Cart
    </div>
  );
};

export default Cart;
