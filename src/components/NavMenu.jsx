import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendar,
  faProjectDiagram,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/nav.css";

const NavMenu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="nav-links">
          <li>
            <div className="logo-container">LOGO</div>
          </li>
          <li className="nav-active">
            <a href="/">
              <FontAwesomeIcon icon={faUser} /> Total Contacts
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faCalendar} /> Calendar
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faProjectDiagram} /> Project Report
            </a>
          </li>
          <li className="logout">
            <a href="/">Log out</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
