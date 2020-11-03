import React from "react";
import { Link, useLocation } from "react-router-dom";
// import Button from "../../custom-components/Button";
import "./header.css";
const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="header_container">
      <div className="title">People&Pals</div>

      <Link className="menu_item" to="/contacts/create">
        Create Contact
      </Link>

      <Link className="menu_item">Log Out</Link>
    </div>
  );
};

export default Header;
