import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Typography,
  Link,
  Badge,
  IconButton,
} from "@material-ui/core/";
import { CartContext } from "../../Context/CartContext";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import useStyles from "./style";

const Navbar = () => {
  const [cart] = useContext(CartContext);
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Typography variatn="h2" align="center">
        <Link className={classes.textLink} onClick={() => history.push("/")}>
          Shopping Cart
        </Link>
      </Typography>
      <IconButton
        className={classes.iconButton}
        aria-label="cart"
        onClick={() => history.push("/cart")}
      >
        <Badge
          className={classes.badge}
          badgeContent={cart.length}
          color="secondary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </AppBar>
  );
};

export default Navbar;
