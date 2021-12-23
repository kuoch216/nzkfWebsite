import React from "react";
import MenuBar from "./components/MenuBar";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Kyudo from "./components/Kyudo";

const App = () => {
  return (
    <div className="App">
      <div id="navbar">
        <Router>
          {/* insert component here */}
          <MenuBar />
          <Routes>
            <Route path="Kyudo" element={<Kyudo />} />
          </Routes>
        </Router>
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
};

export default App;
