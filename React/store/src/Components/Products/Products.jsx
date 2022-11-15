import React from "react";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import context from "../../context";

export default function Products(props) {
  const nav = useNavigate();
  const { addProductToCart, products } = useContext(context);
  return (
    <div>
      {products.map((product, index) => {
        return (
          <Product
            key={index}
            index={index}
            name={product.name}
            price={product.price}
            img={product.img}
            description={product.description}
            addProductToCart={addProductToCart}
          />
        );
      })}
      <button
        onClick={() => {
          nav("/cart");
        }}
        style={{ borderRadius: "100px", backgroundColor: "beige" }}
      >
        go to your card
      </button>
    </div>
  );
}
