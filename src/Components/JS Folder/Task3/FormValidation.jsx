import React, { useState } from "react";
import InputField from "./InputField";
import "./FormValidation.css";

const FormValidation = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Validation function
  const validate = (field, value) => {
    let newErrors = { ...errors };

    if (field === "name") {
      newErrors.name = value.trim() === "" ? "Name cannot be empty" : "";
    }

    if (field === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = !emailPattern.test(value) ? "Invalid email format" : "";
    }

    if (field === "password") {
      const strongPass = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;
      newErrors.password = !strongPass.test(value)
        ? "Password must be 8+ chars, include number & symbol"
        : "";
    }

    setErrors(newErrors);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    validate(name, value); // live validation
  };

  return (
    <div className="form-container">
      <h2>React Form Validation</h2>

      <InputField
        label="Name"
        name="name"
        value={form.name}
        onChange={handleChange}
        error={errors.name}
      />

      <InputField
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        error={errors.email}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
        error={errors.password}
      />

      <button disabled={Object.values(errors).some(err => err !== "")}>
        Submit
      </button>
    </div>
  );
};

export default FormValidation;
