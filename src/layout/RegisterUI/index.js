import React from "react";
import { Button, FormInput } from "../../custom-components";
import "./RegisterUi.css";

const RegisterUI = ({
  form: {
    form,
    onChange,
    isRegisterFormValid,
    loading,
    onRegisterSubmit,
    fieldErrors,
  },
}) => {
  return (
    <form className="form_holder" onSubmit={onRegisterSubmit}>
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
        id="firstName"
        name="firstName"
        value={form.firstName || ""}
        onChange={onChange}
        type="text"
        label="First Name"
        error={fieldErrors?.first_name || ""}
      />
      <FormInput
        id="lastName"
        name="lastName"
        value={form.lastName || ""}
        onChange={onChange}
        type="text"
        label="Last Name"
        error={fieldErrors?.last_name || ""}
      />
      <FormInput
        id="email"
        name="email"
        value={form.email || ""}
        onChange={onChange}
        type="text"
        label="Email"
        error={fieldErrors?.email || ""}
      />
      <FormInput
        id="password"
        name="password"
        value={form.password || ""}
        onChange={onChange}
        type="text"
        label="Password"
        error={fieldErrors?.password || ""}
      />

      {loading ? (
        <Button type="submit" disabled>
          Loading...
        </Button>
      ) : isRegisterFormValid ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit" disabled>
          Submit
        </Button>
      )}
    </form>
  );
};

export default RegisterUI;
