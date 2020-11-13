import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../context/actions/auth/loginAction";
import { register } from "../context/actions/auth/registerAction";
import { createContact } from "../context/actions/contacts/createContact";
import { GlobalContext } from "../context/Provider";

const useForm = () => {
  const [form, setForm] = useState({});
  const [fieldErrors, setFieldErrors] = useState({});
  const history = useHistory();

  const {
    authState: {
      auth: { loading: authLoading, data: authData, error: authError },
    },
    authDispatch,
    contactsState: {
      contacts,
      addContact: {
        loading: createContactLoading,
        error: createContactError,
        data: createContactData,
      },
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  console.log("form ", form);
  console.log("authError", authError);
  console.log("fieldErrors ", fieldErrors);
  console.log("authData ", authData);
  console.log("contacts ", contacts);
  console.log(
    "addcontacts ",
    createContactLoading,
    createContactError,
    createContactData
  );

  const onChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  // ------auth----
  useEffect(() => {
    if (authError) {
      for (const item in authError) {
        if (Array.isArray(item)) {
          setFieldErrors({ ...fieldErrors, [item]: authError[item][0] });
        } else {
          setFieldErrors({ ...fieldErrors, ...authError });
          break;
        }
      }
    }
  }, [authError]);

  useEffect(() => {
    if (authData) history.push("/");
  }, [authData]);

  // ---auth-----

  useEffect(() => {
    if (createContactError) {
      for (const item in createContactError) {
        if (Array.isArray(item)) {
          setFieldErrors({
            ...fieldErrors,
            [item]: createContactError[item][0],
          });
        } else {
          setFieldErrors({ ...fieldErrors, ...createContactError });
          break;
        }
      }
    }
  }, [createContactError]);

  useEffect(() => {
    if (createContactData) {
      history.push("/");
    }
  }, [createContactData]);

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

  const isCreateContactFormValid =
    !!form.firstName && !!form.lastName && !!form.country && !!form.phoneNumber;

  const onCreateContactFormSubmit = (e) => {
    e.preventDefault();
    console.log("here");
    if (isCreateContactFormValid) {
      createContact(form)(contactsDispatch);
    }
  };

  return {
    form,
    onChange,
    isRegisterFormValid,
    onRegisterSubmit,
    authLoading,
    fieldErrors,
    isLoginFormValid,
    onLoginSubmit,
    createContactLoading,
    isCreateContactFormValid,
    onCreateContactFormSubmit,
  };
};
export default useForm;
