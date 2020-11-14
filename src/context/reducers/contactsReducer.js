import {
  CLEAR_CREATE_CONTACT,
  CONTACTS_ERROR,
  CONTACTS_LOADING,
  CONTACTS_SUCCESS,
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
  LOGOUT_USER,
} from "../../constants/actionTypes";
import contactsInitialState from "../initialStates/contactsInitialState";

const contactsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case CONTACTS_LOADING:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: true,
        },
      };
    case CONTACTS_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          data: payload,
        },
      };
    case CONTACTS_ERROR:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          loading: false,
          error: payload,
        },
      };
    case LOGOUT_USER:
      return {
        ...state,
        ...contactsInitialState,
      };

    case CREATE_CONTACT_LOADING:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: true,
        },
      };

    case CREATE_CONTACT_SUCCESS:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          data: [...state.contacts.data, payload],
        },
        addContact: {
          ...state.addContact,
          loading: false,
          data: payload,
        },
      };
    case CREATE_CONTACT_ERROR:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: payload,
        },
      };
    case CLEAR_CREATE_CONTACT:
      return {
        ...state,
        addContact: {
          ...state.addContact,
          loading: false,
          error: null,
          data: null,
        },
      };
    default:
      return state;
  }
};
export default contactsReducer;
