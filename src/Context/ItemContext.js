import React, { createContext, useState } from "react";

export const ItemContext = createContext();

export const ItemProvider = (props) => {
  const [items, setItems] = useState([
    {
      name: "banana",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 1,
    },
    {
      name: "apple",
      price: 25000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 2,
    },
    {
      name: "stawberry",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 3,
    },
    {
      name: "guava",
      price: 20000,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 4,
    },
    {
      name: "guava",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 5,
    },
    {
      name: "guava",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 6,
    },
    {
      name: "guava",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 7,
    },
    {
      name: "guava",
      price: 20000,
      image: "",
      quantity: 1,
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, quia.",
      id: 8,
    },
  ]);
  return (
    <ItemContext.Provider value={[items, setItems]}>
      {props.children}
    </ItemContext.Provider>
  );
};
