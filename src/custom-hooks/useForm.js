import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../context/actions/auth/loginAction";
import { register } from "../context/actions/auth/registerAction";
import { GlobalContext } from "../context/Provider";

const useForm = () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory();

  const {
    authDispatch,
    authState: {
      auth: { loading, data, error },
    },
  } = useContext(GlobalContext);

  useEffect(() => {
    if (error) {
      for (const item in error) {
        if (Array.isArray(item)) {
          setFieldErrors({ ...fieldErrors, [item]: error[item][0] });
        } else {
          setFieldErrors({ ...fieldErrors, ...error });
          break;
        }
      }
    }
  }, [error]);

  useEffect(() => {
    if (data) history.push("/");
  }, [data]);

  console.log("form ", form);
  console.log("error", error);
  console.log("fieldErrors ", fieldErrors);
  console.log("data ", data);

  const onChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const isRegisterFormValid =
    !!form.firstName &&
    !!form.lastName &&
    !!form.userName &&
    !!form.email &&
    !!form.password;

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    setFieldErrors({});
    if (isRegisterFormValid) {
      register(form)(authDispatch);
    }
  };

  const isLoginFormValid = !!form.userName && !!form.password;

  const onLoginSubmit = (e) => {
    e.preventDefault();

    if (isLoginFormValid) {
      login(form)(authDispatch);
    }
  };

  return {
    form,
    onChange,
    isRegisterFormValid,
    onRegisterSubmit,
    loading,
    fieldErrors,
    isLoginFormValid,
    onLoginSubmit,
  };
};
export default useForm;
