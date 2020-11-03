import { useState } from "react";

const useForm = () => {
  const [form, setForm] = useState({});

  const onChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const isFormValid =
    Object.keys(form).length === 5 &&
    Object.keys(form).every((key) => form[key]?.length);
  console.log(form);
  console.log(isFormValid);
  return { form, onChange, isFormValid };
};
export default useForm;
