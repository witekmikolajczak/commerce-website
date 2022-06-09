import React from "react";

const FormRow = ({ name, type, handleChange, labelText, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || ""}
      </label>
      <input
        type={type}
        className="form-input"
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
