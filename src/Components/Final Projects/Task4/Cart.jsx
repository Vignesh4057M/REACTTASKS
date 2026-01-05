import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="cart">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items added yet.</p>}

      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.image}  />
          <h4>{item.title}</h4>
          <p>Qty: {item.qty}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
