import React from "react";
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
        <img
          src={contact_picture}
          style={{ width: "100px", height: "100px", borderRadius: "50%" }}
          alt=""
        />
        {first_name} {last_name}
      </div>
      <span>{country_code + " - " + phone_number}</span>
    </div>
  );
};

export default ContactsListUI;
