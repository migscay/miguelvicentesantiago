import React from "react";

const Input = ({
  name,
  label = name,
  type = "text",
  value = "",
  className = "",
  onChange,
  errors = [],
  ...props
}) => {
  const handleChange = ({ target: { value, name } }) => {
    onChange(name, value);
  };

  return (
    <label className={className}>
      <div className="row">
        <strong className="col-xs-4">{label}:</strong>
        {!!errors.length && (
          <span className="col-xs-8 error-container">{errors[0]}</span>
        )}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};

export default Input;
