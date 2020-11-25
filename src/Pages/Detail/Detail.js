import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";
import { Item, Navbar } from "../../components";
const Detail = () => {
  const [items] = useContext(ItemContext);
  const { id } = useParams();
  const selectedItem = items.filter((item) => item.id === parseInt(id));
  return (
    <div>
      <Navbar />
      <Item
        name={selectedItem[0].name}
        price={selectedItem[0].price}
        description={selectedItem[0].description}
        id={selectedItem[0].id}
        quantity={selectedItem[0].quantity}
      />
    </div>
  );
};

export default Detail;
