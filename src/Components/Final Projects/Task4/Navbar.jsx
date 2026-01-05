import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const Navbar = () => {
  const { cart } = useCart();

  return (
    <nav className="navbar">
      <Link to="/" className="logo">E-Shop</Link>

      <div className="links">
        <Link to="/login">Login</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
