import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ItemContext } from "../../Context/ItemContext";
import { Item, Navbar } from "../../components";
const Detail = () => {
  const [items] = useContext(ItemContext);
  const { id } = useParams();
  const seletedItem = items.filter((item) => item.id == id);
  const selected = { ...seletedItem };
  // console.log(selected[0].name);
  return (
    <div>
      <Navbar />
      <Item
        name={seletedItem[0].name}
        price={seletedItem[0].price}
        description={seletedItem[0].description}
        id={seletedItem[0].id}
      />
    </div>
  );
};

export default Detail;
