import React from "react";
import { Button, FormInput } from "../../custom-components";
import "./RegisterUi.css";

const RegisterUI = ({ form: { form, onChange, isFormValid } }) => {
  const isDisabled = isFormValid ? "disabled" : "";
  return (
    <form className="form_holder">
      <FormInput
        id="userName"
        name="userName"
        value={form.userName || ""}
        onChange={onChange}
        type="text"
        label="User Name"
      />
      <FormInput
        id="firstName"
        name="firstName"
        value={form.firstName || ""}
        onChange={onChange}
        type="text"
        label="First Name"
      />
      <FormInput
        id="lastName"
        name="lastName"
        value={form.lastName || ""}
        onChange={onChange}
        type="text"
        label="Last Name"
      />
      <FormInput
        id="email"
        name="email"
        value={form.email || ""}
        onChange={onChange}
        type="text"
        label="Email"
      />
      <FormInput
        id="password"
        name="password"
        value={form.password || ""}
        onChange={onChange}
        type="text"
        label="Password"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default RegisterUI;
