import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StudentManagement.css";

export default function StudentManagement() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);
  const [editing, setEditing] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const emptyForm = {
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    company: { name: "" },
    address: { street: "", city: "", zipcode: "" }
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setStudents(res.data))
      .catch(() => setError("Failed to load students"))
      .finally(() => setLoading(false));
  }, []);

  const handleOpenAdd = () => {
    setForm(emptyForm);
    setIsAdding(true);
    setEditing(null);
    setShowForm(true);
  };

  const handleOpenEdit = (student) => {
    setForm({
      id: student.id,
      name: student.name || "",
      username: student.username || "",
      email: student.email || "",
      phone: student.phone || "",
      website: student.website || "",
      company: { name: student.company?.name || "" },
      address: {
        street: student.address?.street || "",
        city: student.address?.city || "",
        zipcode: student.address?.zipcode || ""
      }
    });
    setEditing(student);
    setShowForm(true);
    setIsAdding(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isAdding) {
      const maxId = students.reduce((m, s) => Math.max(m, s.id || 0), 0);
      setStudents([{ ...form, id: maxId + 1 }, ...students]);
    } else {
      setStudents(students.map(s => s.id === editing.id ? { ...s, ...form } : s));
    }

    setShowForm(false);
    setForm(emptyForm);
    setEditing(null);
    setIsAdding(false);
  };

  return (
    <div className="sm-container">
      <header className="sm-header">
        <h1>Student Management</h1>
        <button className="sm-add-btn" onClick={handleOpenAdd}>+ Add Student</button>
      </header>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="sm-error">{error}</p>
      ) : (
        <div className="sm-table-wrapper">
          <table className="sm-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(stu => (
                <tr key={stu.id}>
                  <td>{stu.name}</td>
                  <td>{stu.email}</td>
                  <td>{stu.phone}</td>
                  <td>{stu.company?.name}</td>
                  <td>
                    <div className="sm-actions">
                      <button className="sm-btn sm-view-btn" onClick={() => setSelected(stu)}>View</button>
                      <button className="sm-btn sm-edit-btn" onClick={() => handleOpenEdit(stu)}>Edit</button>
                      <button className="sm-btn sm-delete-btn" onClick={() =>
                        setStudents(students.filter(s => s.id !== stu.id))
                      }>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* VIEW MODAL */}
      {selected && (
        <div className="sm-overlay">
          <div className="sm-modal">
            <div className="sm-modal-header">
              <h2>{selected.name}</h2>
              <button className="sm-close-btn" onClick={() => setSelected(null)}>Close</button>
            </div>
            <div className="sm-modal-content">
              <div>Email: {selected.email}</div>
              <div>Phone: {selected.phone}</div>
              <div>Company: {selected.company?.name}</div>
            </div>
          </div>
        </div>
      )}

      {/* FORM MODAL */}
      {showForm && (
        <div className="sm-overlay">
          <div className="sm-modal">
            <form className="sm-form-grid" onSubmit={handleSubmit}>
              <input name="name" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
              <input name="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
              <input name="phone" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
              <button className="sm-submit-btn">{isAdding ? "Add" : "Update"}</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
