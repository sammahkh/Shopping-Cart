import "./App.css";
import React, { useState } from "react";
import CardsList from "./components/CardsList/CardsList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Cart from "./components/Cart/Cart.jsx";

const App = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);

  const handleAddToCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) return;
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Navbar size={cart.length} setShow={setShow} />
      {show ? (
        <CardsList handleAddToCart={handleAddToCart} />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </>
  );
};

export default App;
