import React from "react";

const TextArea = ({
  name,
  label = name,
  type = "textarea",
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
      <textarea
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        {...props}
      />
    </label>
  );
};

export default TextArea;
