import {
  CREATE_CONTACT_ERROR,
  CREATE_CONTACT_LOADING,
  CREATE_CONTACT_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const createContact = (form) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CONTACT_LOADING });

    const {
      firstName: first_name,
      lastName: last_name,
      userName: username,
      country: country_code,
      isFavourite: is_favorite,
      phoneNumber: phone_number,
    } = form;

    let res = await axiosInstance().post("/contacts/", {
      first_name,
      last_name,
      username,
      country_code,
      is_favorite,
      phone_number,
    });

    let data = await res.data;
    if (data) dispatch({ type: CREATE_CONTACT_SUCCESS, payload: data });
  } catch (err) {
    dispatch({ type: CREATE_CONTACT_ERROR, payload: err });
  }
};
