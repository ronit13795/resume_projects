import React from "react";
import { useNavigate } from "react-router-dom";
import context from "../../context";
import { useContext } from "react";

export default function Room({ type, name, id, color, index }) {
  const { setSelectedRoom, products, setProducts } = useContext(context);
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        setSelectedRoom({ type, id, name, color });
        nav(`/room${name}`);
      }}
      style={{
        border: "1px solid black",
        backgroundColor: `${color}`,
        margin: "10px",
        padding: "10px",
      }}
    >
      {name}
    </div>
  );
}
