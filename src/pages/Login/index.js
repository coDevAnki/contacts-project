import React from "react";
// import { login } from "../../context/actions/auth/loginAction";
import useForm from "../../custom-hooks/useForm";
import LoginUI from "../../layout/LoginUI";
import "./loginPage.css";

const LoginPage = () => {
  //   useEffect(() => {
  //     login();
  //   }, []);

  return (
    <div className="login_page">
      <LoginUI form={useForm()} />
    </div>
  );
};

export default LoginPage;
