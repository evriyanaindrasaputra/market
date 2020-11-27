import React, { useContext } from "react";
import CartDetail from "./CartDetail/CartDetail";
import { Navbar } from "../../components";
import { Typography } from "@material-ui/core";
import { CartContext } from "../../Context/CartContext";
import useStyles from "./style";

const Cart = () => {
  const classes = useStyles();
  const [cart, setCart] = useContext(CartContext);
  // const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const deleteFromCart = (id) => {
    const newCarts = cart.filter((cart) => {
      return cart.id !== id;
    });
    setCart(newCarts);
    localStorage.setItem("cart", JSON.stringify([newCarts]));
  };

  let totalPrice = 0;
  cart.length !== 0
    ? cart.forEach((element) => {
        totalPrice += element.price;
      })
    : console.log("cart kosong");

  return (
    <div>
      <Navbar />
      <Typography variant="h4">Shopping Cart</Typography>
      {cart.length !== 0 ? (
        cart.map((newcart) => (
          <CartDetail
            cart={newcart}
            key={newcart.id}
            deleteFromCart={deleteFromCart}
          />
        ))
      ) : (
        <Typography variant="h3" className={classes.cartEmpty}>
          cart kosong
        </Typography>
      )}
      ;<Typography>{totalPrice}</Typography>
    </div>
  );
};

export default Cart;
