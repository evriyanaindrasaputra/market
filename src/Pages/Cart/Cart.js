import React from "react";
import CartDetail from "./CartDetail/CartDetail";
import { Navbar } from "../../components";
import { Typography } from "@material-ui/core";
import useStyles from "./style";

const Cart = () => {
  const classes = useStyles();
  // const [setCart] = useContext(CartContext);
  const newcart = JSON.parse(localStorage.getItem("cart"));
  let totalPrice = 0;
  newcart.length !== 0
    ? newcart.forEach((element) => {
        totalPrice += element.price;
      })
    : console.log("cart kosong");

  return (
    <div>
      <Navbar />
      <Typography variant="h4">Shopping Cart</Typography>
      {newcart.length !== 0 ? (
        newcart.map((cart) => <CartDetail cart={cart} key={cart.id} />)
      ) : (
        //     <Grid className={classes.gridContainer} container key={cart.id}>
        //       <Grid item md={4} xs={12}>
        //         <img
        //           className={classes.image}
        //           src={
        //             cart.image ||
        //             "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        //           }
        //           alt={cart.name}
        //         />
        //       </Grid>
        //       <Grid item md={3} xs={12}>
        //         <Typography variant="h4" component="h1">
        //           {cart.name}
        //         </Typography>
        //         <Typography variant="subtitle2">{cart.description}</Typography>
        //       </Grid>
        //       <Grid item md={2} xs={12}>
        //         <Box display="flex">
        //           <TextField
        //             type="number"
        //             id="outlined-basic"
        //             label="Quantity"
        //             variant="outlined"
        //             size="small"
        //             // defaultValue={cart.quantity}
        //             value={cart.quantity}
        //             onChange={(e) => changeQuantity(e.target)}
        //           />
        //           <IconButton
        //             color="secondary"
        //             aria-label="delete"
        //             onClick={() => deleteItem(cart.id)}
        //           >
        //             <DeleteIcon />
        //           </IconButton>
        //         </Box>
        //       </Grid>
        //       <Grid item md={3} xs={12}>
        //         Total
        //       </Grid>
        //     </Grid>
        //   ))
        // )

        <Typography variant="h3" className={classes.cartEmpty}>
          cart kosong
        </Typography>
      )}
      ;<Typography>{totalPrice}</Typography>
    </div>
  );
};

export default Cart;
