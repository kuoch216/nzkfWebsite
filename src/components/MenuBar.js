import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import "./MenuBar.css";

import Kyudo from "./Kyudo";

const MenuBar = function() {

  const [isOpen, setOpen] = useState(false);

  return (
    <div id="navbar">
        <ul>
          <li>
            <NavLink to="/Kyudo">Kyudo</NavLink>
          </li>
          <li>
            <label>NZKF</label>
          </li>
          <li>
            <label>Locations</label>
          </li>
          <li>
            <label>Contact Us</label>
          </li>
        </ul>
    </div>
  );
}

export default MenuBar;
