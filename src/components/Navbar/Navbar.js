import React from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Typography, Link } from "@material-ui/core/";

import useStyles from "./style";

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <AppBar className={classes.appBar} position="static" color="primary">
      <Typography variatn="h2" align="center">
        <Link className={classes.textLink} onClick={() => history.push("/")}>
          Shopping Cart
        </Link>
      </Typography>
      <Typography variatn="h2" align="center">
        <Link
          className={classes.textLink}
          onClick={() => history.push("/cart")}
        >
          Cart
        </Link>
      </Typography>
    </AppBar>
  );
};

export default Navbar;
