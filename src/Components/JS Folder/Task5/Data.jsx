import React, { useEffect, useState } from "react";
import axios from "axios";

const Data = () => {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");
  const [error, setError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setProducts(response.data.products);
    } catch (error) {
      setError("Error occurs");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  // Extract categories from API
  const categories = ["all", ...new Set(products.map(p => p.category))];

  // Filter Logic (Search + Category)
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "all" ? true : product.category === category;

    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchText.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sorting Logic
  let sortedProducts = [...filteredProducts];

  if (sortOrder === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price);
  }

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      {/* Filters Section */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            fontSize: "16px",
          }}
        />

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.toUpperCase()}
            </option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="default">Sort by Price</option>
          <option value="low-high">Low → High</option>
          <option value="high-low">High → Low</option>
        </select>
      </div>

      {/* Products Section */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              padding: "15px",
              width: "220px",
              borderRadius: "10px",
            }}
          >
            <img
              src={product.images[0]}
              alt={product.title}
              style={{
                width: "100%",
                height: "150px",
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />
            <h4>{product.title}</h4>
            <p>Category: {product.category}</p>
            <p>₹ {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
