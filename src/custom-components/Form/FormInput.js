import React from "react";
import "./FormInput.css";

const FormInput = ({ label, name, id, ...otherProps }) => {
  return (
    <div className="form_container">
      {label ? <label htmlFor={name}>{label}</label> : null}
      <input id={id} name={name} {...otherProps} className="input" />
    </div>
  );
};

export default FormInput;
