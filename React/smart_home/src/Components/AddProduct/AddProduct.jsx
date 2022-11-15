import React from "react";
import context from "../../context";
import { useContext, useState } from "react";

export default function AddProduct({ setShowAddComponent }) {
  const [product, setProduct] = useState("");
  const { products, setProducts, selectedRoom } = useContext(context);

  const AddProduct = () => {
    const roomId = selectedRoom.id;
    if (product === "boilermaker") {
      const validBoiler = checkBoilermaker();
      if (!validBoiler) {
        return alert("boiler can be only in bathroom");
      }
    }
    let roomProducts;
    if (!products[roomId]) {
      roomProducts = [{ type: product, on: false }];
    } else {
      if (product === "stereo system") {
        const includeStereo = checkStereo(roomId);
        if (includeStereo) {
          return alert("the room already include stereo");
        }
      }
      if (!roomProductsLength(roomId)) {
        return alert("the room already include 5 products");
      }
      roomProducts = [...products[roomId], { type: product, on: false }];
    }
    setProducts({ ...products, [roomId]: roomProducts });
  };

  const checkStereo = (id) => {
    let includeStereo = false;
    products[id].forEach((product) => {
      if (product.type === "stereo system") {
        includeStereo = true;
      }
    });
    return includeStereo;
  };

  const checkBoilermaker = () => {
    if (selectedRoom.type !== "bathroom") {
      return false;
    }
    return true;
  };

  const roomProductsLength = (id) => {
    if (products[id].length >= 5) {
      return false;
    }
    return true;
  };
  return (
    <div>
      <select
        onChange={(e) => {
          setProduct(e.target.value);
        }}
      >
        <option value="">בחר מוצר</option>
        <option value="air Conditioner">מזגן</option>
        <option value="lamp"> מנורה</option>
        <option value="stereo system">מערכת סטריאו</option>
        <option value="boilermaker">דוד</option>
      </select>
      <button
        onClick={() => {
          AddProduct();
          setShowAddComponent(false);
        }}
      >
        add product
      </button>
    </div>
  );
}
