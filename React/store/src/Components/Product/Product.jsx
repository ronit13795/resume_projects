import React from "react";

export default function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.price}</h3>
      <h5>{props.description}</h5>
      <img src={props.img} width={"100px"} />
      {props.addProductToCart ? (
        <button
          onClick={() => {
            props.addProductToCart(props.index);
          }}
        >
          +
        </button>
      ) : (
        <button
          onClick={() => {
            props.deleteProduct(props.index);
          }}
        >
          -
        </button>
      )}
    </div>
  );
}
