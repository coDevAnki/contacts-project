import React from "react";
import useForm from "../../../custom-hooks/useForm";
import CreateContactUI from "../../../layout/CreateContactUI";

const CreateContactPage = () => {
  return (
    <div>
      <CreateContactUI form={useForm()} />
    </div>
  );
};

export default CreateContactPage;
