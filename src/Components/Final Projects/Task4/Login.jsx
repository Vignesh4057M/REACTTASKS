import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useEffect } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [users, setUsers] = useState([])
  
  const getUsers =async ()=> {
    try {
        const response = await axios.get("https://fakestoreapi.com/users")
        setUsers(response.data);
        console.log(response.data);
        

    } catch (error) {
       console.log(error); 
    }
  }


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
  
    if (email && password && users.find((u) => u.email === email && u.password === password)) {
  alert("Login successfully");
} else {
  alert("Email or password incorrect");
}

   
  };

  useEffect(()=>{
    getUsers();
  }, [])

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={handleLogin}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
};

export default Login;
