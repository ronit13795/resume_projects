import React from "react";
import context from "../../context";
import { useContext } from "react";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const nav = useNavigate();
  const { cart, deleteProduct, totalPrice } = useContext(context);
  return (
    <div>
      <h1 style={{ color: "violet" }}>Your Cart:</h1>
      {cart.length === 0 && <h4>Empty</h4>}
      {cart.map((product, index) => {
        return (
          <Product
            key={index}
            index={index}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            deleteProduct={deleteProduct}
          />
        );
      })}
      <h1>total: {totalPrice()}</h1>
      <button
        onClick={() => {
          nav("/payment");
        }}
      >
        WANT TO PAY?
      </button>
    </div>
  );
}
