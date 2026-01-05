import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Fetch.css";

const Fetch = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);

  const productsPerPage = 8;

  const fetchProducts = async () => {
    setLoading(true);
    const response = await axios.get("https://dummyjson.com/products");
    setProducts(response.data.products);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleNext = () => {
    if (page * productsPerPage < products.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div className="product-container">

      <h2 className="product-title">Product List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">

          {products
            .slice((page - 1) * productsPerPage, page * productsPerPage)
            .map((product) => (
              <div
                key={product.id}
                className="product-card-box"
                onClick={() => setSelected(product)}
              >
                <img src={product.thumbnail} alt={product.title} />

                <h4 className="product-name">{product.title}</h4>
                <p className="product-price">₹ {product.price}</p>
              </div>
            ))}

        </div>
      )}

      <div className="product-pagination">
        <button onClick={handlePrev} disabled={page === 1}>
          Previous
        </button>

        <span> Page: {page} </span>

        <button
          onClick={handleNext}
          disabled={page * productsPerPage >= products.length}
        >
          Next
        </button>
      </div>

      {selected && (
        <div className="product-details-box">
          <h3>{selected.title}</h3>
          <img src={selected.thumbnail} alt="" />
          <p><b>Brand:</b> {selected.brand}</p>
          <p><b>Price:</b> ₹ {selected.price}</p>
          <p><b>Description:</b> {selected.description}</p>

          <button onClick={() => setSelected(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Fetch;
