import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Dashboard = () => {
  const [products,setProducts] = useState([])
  const [totalProducts, setTotalProducts] = useState(0);
  const [totalCategories, setTotalCategories] = useState(0);
  const [search,setSearch] = useState("")
  const [category,setCategory] = useState("all")

  const fetchData = async () => {
    try {
      const productsRes = await axios.get("https://fakestoreapi.com/products");
      const categoriesRes = await axios.get("https://fakestoreapi.com/products/categories");

      setTotalProducts(productsRes.data.length);
      setTotalCategories(categoriesRes.data.length);
      setProducts(productsRes.data);
      setCategories(["all" , ...categoriesRes.data])

    } catch (error) {
      console.error("API Error:", error);
    }
  };
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const filtered = products.filter((p) =>p.title.toLowerCase().includes(search.toLowerCase()))
  .filter((p) => category === "all" ? true : p.category === category);

  return (
    <div style={{ padding: "30px" }}>
      <h1>React Dashboard (FakeStore API)</h1>

      <div style={{
        display: "flex",
        gap: "20px",
        marginTop: "20px",
        flexWrap: "wrap"
      }}>
        {/* Cards */}
        <Card title="Total Products" value={totalProducts} />
        <Card title="Total Categories" value={totalCategories} />
      </div>

      <div>
        <input type="text" placeholder="Enter the search product..." value={search} onChange={(e) => setSearch(e.target.value)} style={{
          height:"33px",width:"300px", borderRadius:"20px", padding:"10px",border:"1px solid #ccc", margin:"20px"
        }}/>

        <select value={category} onChange={(e) => setCategory(e.target.value)} style={{padding:"10px", borderRadius:"5px", border:"1px solid #ccc"}}>
          {categories.map((c) => (
            <option key={c} value={c}>{c.toUpperCase()}</option>
          ))}
        </select>
      </div>

      <h2 style={{marginTop:"10px", marginBottom:"15px"}}>Product Table</h2>
      <table style={{width:"100%",borderRadius:"10px",  boxShadow:"0 2px 10px"}}>
        <thead>
          <tr style={{backgroundColor:"white", textAlign:"left"}}>
            <th style={thStyle}>Image</th>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Category</th>
            <th style={thStyle}>Price</th>
            <th style={thStyle}>Rating</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map((p) => (
            <tr key={p.id} >
              <td>
                <img src={p.image} alt={p.title} height={100} width={100} style={{objectFit:"contain"}} />
              </td>
              <td style={tdStyle}>{p.title}</td>
              <td style={tdStyle}>{p.category}</td>
              <td style={tdStyle}>{p.price}</td>
              <td style={tdStyle}>{p.rating.rate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding:"10px",
  borderBottom:"2px solid #ddd"
};
const tdStyle = {
  padding:"20px",
  borderBottom:"2px solid #fff"
};
// const rowStyle = {};

export default Dashboard;
