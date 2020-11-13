import React from "react";
import ContactsListUI from "./ContactsListUI";
import "./ContactsUi.css";

const ContactsUI = ({
  state: {
    contacts: { loading, data, error },
  },
}) => {
  return (
    <div className="contactslist_container">
      {data.map(({ id, ...contact }) => (
        <ContactsListUI {...contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactsUI;
