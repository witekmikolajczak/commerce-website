import React from "react";

const FormDescription = ({
  rows,
  cols,
  name,
  handleChange,
  defaultValue,
  labelText,
}) => {
  return (
    <div className="description">
      <label htmlFor={name} className="form-label">
        {labelText || ""}
      </label>
      <textarea
        rows={rows}
        cols={cols}
        name={name}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default FormDescription;
