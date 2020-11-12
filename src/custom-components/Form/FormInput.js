import React from "react";
import "./FormInput.css";

const FormInput = ({ label, name, id, error, ...otherProps }) => {
  return (
    <>
      <div className="form_container">
        {label ? <label htmlFor={name}>{label}</label> : null}
        <input id={id} name={name} {...otherProps} className="input" />
      </div>
      {error ? <span className="error">{error}</span> : null}
    </>
  );
};

export default FormInput;
