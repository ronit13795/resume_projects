import React from "react";
import context from "../context";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function List() {
  const nav = useNavigate();
  const { users, setUsers, nowUserUse, setNowUserUse, products, setProduct } =
    useContext(context);
  const license = nowUserUse.license ? "yes" : "no";

  const productsNotInPlace = () => {
    return products.filter((product) => {
      return !product.inPlace;
    });
  };

  const update = (product) => {
    if (product.forklift && !nowUserUse.license) {
      return alert("you must have license!");
    }

    setNowUserUse({ ...nowUserUse, products: nowUserUse.products + 1 });
    const updatedProducts = products.map((products) => {
      if (products.id === product.id) {
        return { ...products, inPlace: true };
      }
      return products;
    });
    setProduct([...updatedProducts]);
    const updateUsers = users.map((user) => {
      if ((user.id = nowUserUse.id)) {
        return { ...user, products: user.products + 1 };
      }
      return user;
    });
    return setUsers([...updateUsers]);
  };
  return (
    <div>
      <h1> welcome {nowUserUse.name}</h1>
      <br />
      details:
      <p> full Name: {nowUserUse.name} </p>
      <p> no. : {nowUserUse.id} </p>
      <p> forklift truck license: {license} </p>
      <h1> list of products</h1>
      {productsNotInPlace().map((product) => {
        const license = product.forklift ? "yes" : "no";
        return (
          <div style={{ border: "1px solid black" }}>
            <p>no. {product.id}</p>
            <p>Name. {product.name}</p>
            <p>need forklift truck: {license}</p>
            <button
              onClick={() => {
                update(product);
              }}
            >
              update
            </button>
          </div>
        );
      })}
      <button
        onClick={() => {
          nav("/");
          setNowUserUse({});
        }}
      >
        log out
      </button>
    </div>
  );
}
