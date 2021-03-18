import React from "react";

const Button = ({ children, className = "btn-submit", disabled }) => {
  return (
    <button className={className} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
