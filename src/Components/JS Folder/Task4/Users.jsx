import React, { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [error, setError] = useState(null);

  // FETCH USERS
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (err) {
      setError("Error fetching users");
    }
  };

  // RUN ONCE
  useEffect(() => {
    fetchUsers();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>User List</h2>

      {/* TABLE */}
      <table
        border="1"
        cellPadding="10"
        style={{ width: "100%", marginBottom: "20px", cursor: "pointer" }}
      >
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} onClick={() => setSelectedUser(user)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* USER DETAILS CARD */}
      {selectedUser && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: "20px",
            width: "350px",
            borderRadius: "10px",
          }}
        >
          <h3>{selectedUser.name}</h3>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Phone:</strong> {selectedUser.phone}</p>
          <p><strong>City:</strong> {selectedUser.address.city}</p>
          <p><strong>Company:</strong> {selectedUser.company.name}</p>
        </div>
      )}
    </div>
  );
};

export default Users;
