import React, {useState} from "react";
import { Navigate, NavLink } from "react-router-dom";
import "./MenuBar.css";

import Kyudo from "../pages/Kyudo";

const MenuBar = function() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div id="navbar">
        <ul>
          <li>
            <NavLink to="/Kyudo">Kyudo</NavLink>
          </li>
          <li>
            <NavLink to="/NZKF">NZKF</NavLink>
          </li>
          <li>
            <NavLink to="/Locations">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/ContactUs">Contact Us</NavLink>
          </li>
        </ul>
    </div>
  );
}

export default MenuBar;
