import ringDiamond from "./Components/img/download.jpg";
import necklace from "./Components/img/images (1).jpg";
import set from "./Components/img/images (2).jpg";
import butterflyNecklace from "./Components/img/images (3).jpg";
import roundNecklace from "./Components/img/images.jpg";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import context from "./context";
import PayMent from "./Components/PayMent/PayMent.jsx";

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    {
      name: "diamond ring",
      price: 2500,
      description: "A luxurious ring suitable for marriage proposals",
      img: ringDiamond,
    },
    {
      name: "necklace",
      price: 1200,
      description: "Handmade circle necklace",
      img: necklace,
    },
    {
      name: "set",
      price: 1800,
      description: "A designed set of necklace and earrings made of pearls",
      img: set,
    },
    {
      name: "necklace",
      price: 1000,
      description: "Butterfly style gold necklace",
      img: butterflyNecklace,
    },
    {
      name: "necklace",
      price: 800,
      description: "Silver necklace with ring pendant",
      img: roundNecklace,
    },
  ];

  const addProductToCart = (index) => {
    cart.push(products[index]);
    setCart([...cart]);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const deleteProduct = (indexToDelete) => {
    const newCart = cart.filter((product, index) => {
      return index !== indexToDelete;
    });
    setCart(newCart);
  };

  const totalPrice = () => {
    let total = 0;
    cart.forEach((product) => {
      total += product.price;
    });

    return total;
  };
  return (
    <div>
      <context.Provider
        value={{
          cart,
          setCart,
          addProductToCart,
          products,
          deleteProduct,
          totalPrice,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Products products={products} />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/payment" element={<PayMent />}></Route>
          </Routes>
        </BrowserRouter>
      </context.Provider>
    </div>
  );
}

export default App;
