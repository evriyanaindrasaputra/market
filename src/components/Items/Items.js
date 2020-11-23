import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";
import { Grid } from "@material-ui/core";
import Item from "./Item/Item";

const Items = () => {
  const [items] = useContext(ItemContext);
  return (
    <div>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item lg={3} md={6} xs={12} key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              total={item.total}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Items;
