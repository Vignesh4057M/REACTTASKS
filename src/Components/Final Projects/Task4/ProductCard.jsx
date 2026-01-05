import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ProductCard = ({ product }) => {
  return (
    <div className="pc-card">
      <div className="pc-image-wrapper">
        <img
          src={product.image}
          alt={product.title}
          className="pc-image"
        />
      </div>

      <h4 className="pc-title">
        {product.title.slice(0, 30)}...
      </h4>

      <p className="pc-price">₹ {product.price}</p>

      <Link to={`/product/${product.id}`} className="pc-link">
        <button className="pc-btn">View Details</button>
      </Link>
    </div>
  );
};

export default ProductCard;
