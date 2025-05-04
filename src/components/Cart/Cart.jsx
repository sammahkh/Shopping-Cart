import React, { useState, useEffect } from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const [price, setPrice] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  useEffect(() => {
    const ans = cart.reduce((total, item) => total + item.price, 0);
    setPrice(ans);
  }, [cart]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { name, email, cart, total: price });
    alert(`Thank you ${name}! Your order has been submitted.`);
    setCart([]);
    setName("");
    setEmail("");
    setShowForm(false);
  };

  return (
    <article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="Product" />
            <p>{item.title}</p>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>Rs - {price}</span>
      </div>

      <button className="checkout_btn" onClick={() => setShowForm(true)}>
        Checkout
      </button>

      {showForm && (
        <div className="modal">
          <div className="modal_content">
            <span className="close_btn" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <form className="checkout_form" onSubmit={handleSubmit}>
              <h3>Checkout</h3>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label>Email: </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Submit Order</button>
            </form>
          </div>
        </div>
      )}
    </article>
  );
};

export default Cart;
