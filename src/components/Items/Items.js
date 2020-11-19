import React, { useContext } from "react";
import { ItemContext } from "../../Context/ItemContext";
import Item from "./Item/Item";

const Items = () => {
  const [items] = useContext(ItemContext);
  return (
    <div>
      {items.map((item) => (
        <Item
          name={item.name}
          price={item.price}
          key={item.id}
          total={item.total}
        />
      ))}
    </div>
  );
};

export default Items;
