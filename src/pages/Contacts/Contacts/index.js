import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getContacts } from "../../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../../context/Provider";
import ContactsUI from "../../../layout/ContactsUI";

const Contacts = () => {
  const { contactsState, contactsDispatch } = useContext(GlobalContext);
  const history = useHistory();

  useEffect(() => {
    getContacts(history)(contactsDispatch);
  }, []);

  return <ContactsUI state={contactsState} />;
};

export default Contacts;
