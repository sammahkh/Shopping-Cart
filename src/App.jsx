import "./App.css";
import React, { useState } from "react";
import CardsList from "./components/CardsList/CardsList.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    if (cart.some((cartItem) => cartItem.id === item.id)) return;
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Navbar size={cart.length} />
      <CardsList handleAddToCart={handleAddToCart} />
    </>
  );
};

export default App;
