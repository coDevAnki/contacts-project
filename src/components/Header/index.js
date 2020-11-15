import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logout } from "../../context/actions/auth/logoutAction";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import "./header.css";
const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  const { contactsDispatch, authState, authDispatch } = useContext(
    GlobalContext
  );

  const logoutUser = () => {
    let combinedispatch = (action) => {
      contactsDispatch(action);
      authDispatch(action);
    };
    logout(history)(combinedispatch);
  };

  return (
    <div className="header_container">
      <Link to="/" className="title">
        People&Pals
      </Link>

      {isAuthenticated() ? (
        <>
          <Link className="menu_item" to="/contacts/create">
            Create Contact
          </Link>
          <div className="menu_item" onClick={logoutUser}>
            Log Out
          </div>
        </>
      ) : pathname === "/auth/login" || pathname === "/auth/register" ? null : (
        <>
          <Link className="menu_item" to="/auth/register">
            Register
          </Link>
          <Link className="menu_item" to="/auth/login">
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
