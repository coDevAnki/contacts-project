import React from "react";
import { ImageThumb } from "../../../custom-components/";
import "./ContactsListUI.css";

const ContactsListUI = ({
  first_name,
  last_name,
  contact_picture,
  country_code,
  phone_number,
}) => {
  return (
    <div className="contact_container">
      <div>
        <ImageThumb
          firstName={first_name}
          lastName={last_name}
          src={contact_picture}
        />
        {first_name} {last_name}
      </div>
      <span>{country_code + " - " + phone_number}</span>
    </div>
  );
};

export default ContactsListUI;
