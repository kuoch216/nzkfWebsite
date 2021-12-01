import logo from "./logo.svg";
//import ikfLogo from "../public/ikf_head_logo.gif";
import ankfLogo from "./common/images/ankf_logo.gif";
import ikfContactUsLogo from "./common/images/ikf_contact_us.gif";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <div id="header">
        <h1 class="header-logo">
          <img src={ikfLogo} />
        </h1>
        <p class="header-p">
          Kyudo, the "Way of the Bow", is the modern Martial Art of Japanese
          Archery
        </p>
      </div> */}
      <div id="navbar">
        {/* insert component here */}

      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
