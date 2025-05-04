import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
const Navbar = ({ size, setShow }) => {
  return (
    <nav>
      <div className="nav_box">
        <span className="title" onClick={() => setShow(true)}>
          Shopping Cart
        </span>
        <div className="cart" onClick={() => setShow(false)}>
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
