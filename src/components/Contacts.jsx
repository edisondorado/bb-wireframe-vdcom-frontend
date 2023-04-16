import React from "react";
import TableContacts from "./TableContacts";
import NavMenu from "./NavMenu";
import "./styles/main.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <div className="nav-menu">
        <NavMenu />
      </div>
      <div className="content">
        <TableContacts />
      </div>
    </div>
  );
};

export default Contacts;
