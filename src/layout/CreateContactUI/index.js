import React from "react";
import { Button, FormHeader, FormInput } from "../../custom-components";
import countriesData from "../../utils/countriesData";
import "./CreateContactUI.css";

const CreateContactUI = ({
  form: {
    form,
    onChange,
    createContactLoading,
    isCreateContactFormValid,
    onCreateContactFormSubmit,
  },
}) => {
  const countriesOptions = countriesData.map(({ text, ...other }) => {
    return { optionText: text, ...other };
  });

  return (
    <form
      id="create_contact"
      className="create_contact_form_holder"
      onSubmit={onCreateContactFormSubmit}
    >
      <FormHeader>Create New Contact</FormHeader>
      <FormInput onChange={onChange} name="firstName" label="First Name" />
      <FormInput onChange={onChange} name="lastName" label="Last Name" />
      <FormInput
        form="create_contact"
        name="country"
        onChange={onChange}
        elementType="select"
        options={countriesOptions}
        label="Country"
      />

      <FormInput onChange={onChange} name="phoneNumber" label="PhoneNumber" />
      <FormInput
        onChange={onChange}
        name="isFavourite"
        type="checkbox"
        label="Add to favourites"
      />
      {createContactLoading ? (
        <Button type="submit" disabled>
          Loading...
        </Button>
      ) : isCreateContactFormValid ? (
        <Button type="submit">Submit</Button>
      ) : (
        <Button type="submit" disabled>
          Submit
        </Button>
      )}
    </form>
  );
};

export default CreateContactUI;
