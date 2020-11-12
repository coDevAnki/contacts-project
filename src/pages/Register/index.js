import React, { useEffect } from "react";
import { register } from "../../context/actions/auth/registerAction";
import useForm from "../../custom-hooks/useForm";
import RegisterUI from "../../layout/RegisterUI";
import "./registerPage.css";

const RegisterPage = () => {
  useEffect(() => {
    register();
  }, []);

  return (
    <div className="register_page">
      <RegisterUI form={useForm()} />
    </div>
  );
};

export default RegisterPage;
