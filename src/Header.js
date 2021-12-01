import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import ikfLogo from "../public/ikf_head_logo.gif";
import ankfLogo from "./common/images/ankf_logo.gif";
import ikfContactUsLogo from "./common/images/ikf_contact_us.gif";
import "./App.css";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <a href="http://www.kyudo.jp" target="_blank">
            <img src={ankfLogo} />
          </a>
        </li>
        <li>
          <a href="http://ikyf.org/">
            <img src={ikfContactUsLogo} />
          </a>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

export default Header;
