import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "banana",
      price: 20000,
      total: 1,
      id: 1,
    },
    {
      name: "apple",
      price: 25000,
      total: 1,
      id: 2,
    },
    {
      name: "stawberry",
      price: 20000,
      total: 1,
      id: 3,
    },
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
