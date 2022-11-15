import React from "react";
import context from "../../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Product from "../Product/Product";

export default function RoomDetails() {
  const nav = useNavigate();
  const [showAddComponent, setShowAddComponent] = useState(false);
  const { selectedRoom, products, setProducts } = useContext(context);
  const productToShow = products[selectedRoom.id]
    ? products[selectedRoom.id]
    : [];
  return (
    <div>
      <h2>name : {selectedRoom.name}</h2>
      <br />
      <h2>type : {selectedRoom.type}</h2> <br />
      {productToShow.map((product, index) => {
        return (
          <Product
            key={index}
            index={index}
            on={product.on}
            type={product.type}
          />
        );
      })}
      <button
        onClick={() => {
          setShowAddComponent(true);
        }}
      >
        add product
      </button>
      <button
        onClick={() => {
          nav("/");
        }}
      >
        back
      </button>
      {showAddComponent && (
        <AddProduct setShowAddComponent={setShowAddComponent} />
      )}
    </div>
  );
}
