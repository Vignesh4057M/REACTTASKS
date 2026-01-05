import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Product.css'

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product details:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="container product-detail" style={{ padding: '20px' }}>
      <h2>{product.title}</h2>

      {/* Product image */}
      <img
        src={product.thumbnail || product.images?.[0]}
        alt={product.title}
        width={300}
        height={200}
        style={{ objectFit: 'cover', marginBottom: '10px' }}
      />

      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>

      <p><strong>Description:</strong></p>
      <p>{product.description || "No description available."}</p>

      {/* Tags */}
      {product.tags && (
        <p>
          <strong>Tags:</strong> {product.tags.join(", ")}
        </p>
      )}

      {/* Dimensions */}
      {product.dimensions && (
        <p>
          <strong>Dimensions:</strong>
          {` ${product.dimensions.width} x ${product.dimensions.height} x ${product.dimensions.depth}`}
        </p>
      )}

      {/* Availability */}
      <p><strong>Status:</strong> {product.availabilityStatus}</p>

      {/* Reviews */}
      <h3>Customer Reviews</h3>
      {product.reviews?.length > 0 ? (
        product.reviews.map((review, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <p>⭐ {review.rating}</p>
            <p><strong>{review.reviewerName}:</strong> {review.comment}</p>
          </div>
        ))
      ) : (
        <p>No reviews available.</p>
      )}

      <Link to="/" className="back-link">← Back to Products</Link>
    </div>
  );
};

export default ProductDetail;
