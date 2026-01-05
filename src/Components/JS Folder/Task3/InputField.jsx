import React from "react";
import Error from "./Error";

const InputField = ({ label, name, value, onChange, type = "text", error }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={error ? "input-error" : ""}
      />
      {error && <Error message={error} />}
    </div>
  );
};

export default InputField;
