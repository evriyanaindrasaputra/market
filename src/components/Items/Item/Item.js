import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { CartContext } from "../../../Context/CartContext";
import {
  Card,
  CardContent,
  CardActions,
  CardActionArea,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";

import useStyles from "./style";

const Item = ({ name, price, description, id }) => {
  const [cart, setCart] = useContext(CartContext);
  const classes = useStyles();
  const history = useHistory();
  const addToCart = () => {
    const newCart = { name: name, price: price, description: description };
    setCart((current) => [...current, newCart]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={
              "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
            }
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary" onClick={() => history.push(`/detail/${id}`)}>
            Details
          </Button>
          <Button color="primary" onClick={() => addToCart()}>
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
