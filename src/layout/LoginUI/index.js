import React from "react";
import { Button, FormInput } from "../../custom-components";
import "./LoginUi.css";

const LoginUI = ({
  form: {
    form,
    onChange,
    isLoginFormValid,
    loading,
    onLoginSubmit,
    fieldErrors,
  },
}) => {
  return (
    <form className="form_holder" onSubmit={onLoginSubmit}>
      {fieldErrors ? (
        <div className="invalid">{fieldErrors?.detail}</div>
      ) : null}
      <FormInput
        id="userName"
        name="userName"
        value={form.userName || ""}
        onChange={onChange}
        type="text"
        label="User Name"
        error={fieldErrors?.username || ""}
      />
      <FormInput
        id="password"
        name="password"
        value={form.password || ""}
        onChange={onChange}
        type="text"
        label="Password"
      />

      {loading ? (
        <Button type="submit" disabled>
          Loading...
        </Button>
      ) : isLoginFormValid ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit" disabled>
          Submit
        </Button>
      )}
    </form>
  );
};

export default LoginUI;
