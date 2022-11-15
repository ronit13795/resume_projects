import React from "react";
import context from "../../context";
import { useContext } from "react";

export default function Product({ on, type, index }) {
  const { selectedRoom, products, setProducts } = useContext(context);

  const changeProductOn = () => {
    products[selectedRoom.id][index].on = !products[selectedRoom.id][index].on;
    setProducts({ ...products });
  };
  let color = on ? "green" : "red";
  return (
    <div
      onClick={changeProductOn}
      style={{ border: "1px solid black", backgroundColor: `${color}` }}
    >
      {type}
    </div>
  );
}
