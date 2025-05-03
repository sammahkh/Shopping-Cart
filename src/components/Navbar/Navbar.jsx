import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="nav_box">
        <span className="title">Shopping Cart</span>
        <div className="cart">
          <span>
            <FaShoppingCart />
          </span>
          <span>465</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
