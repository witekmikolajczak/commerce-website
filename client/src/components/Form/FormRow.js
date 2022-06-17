import React from "react";

const FormRow = ({
  name,
  type,
  handleChange,
  labelText,
  value,
  className,
  max,
  placeholder,
}) => {
  return (
    <div className={`form-row ${className}`}>
      <label htmlFor={name} className="form-label">
        {labelText || ""}
      </label>
      <input
        type={type}
        className={"form-input"}
        name={name}
        value={value}
        onChange={handleChange}
        max={max}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormRow;
