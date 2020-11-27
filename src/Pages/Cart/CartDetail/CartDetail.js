import React from "react";
import {
  Typography,
  Grid,
  Box,
  IconButton,
  TextField,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import useStyles from "./style";

const CartDetail = ({ cart, deleteFromCart }) => {
  const classes = useStyles();
  const onChange = (e) => {
    cart.quantity = e.target.value;
    cart.price = cart.price * cart.quantity;
    console.log(cart);
  };
  return (
    <Grid className={classes.gridContainer} container key={cart.id}>
      <Grid item md={4} xs={12}>
        <img
          className={classes.image}
          src={
            cart.image ||
            "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
          }
          alt={cart.name}
        />
      </Grid>
      <Grid item md={3} xs={12}>
        <Typography variant="h4" component="h1">
          {cart.name}
        </Typography>
        <Typography variant="subtitle2">{cart.description}</Typography>
      </Grid>
      <Grid item md={2} xs={12}>
        <Box display="flex">
          <TextField
            type="number"
            id="outlined-basic"
            label="Quantity"
            variant="outlined"
            size="small"
            defaultValue={cart.quantity}
            onChange={(e) => onChange(e)}
          />
          <IconButton
            color="secondary"
            aria-label="delete"
            onClick={() => deleteFromCart(cart.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      </Grid>
      <Grid item md={3} xs={12}>
        {cart.price}
      </Grid>
    </Grid>
  );
};

export default CartDetail;
