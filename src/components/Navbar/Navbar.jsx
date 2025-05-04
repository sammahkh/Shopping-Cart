import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
const Navbar = ({size}) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="title">Shopping Cart</span>
        <div className="cart">
          <span>
            <FaShoppingCart />
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
