import React from "react";
import MenuBar from "./components/MenuBar";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Kyudo from "./pages/Kyudo";
import Home from "./pages/Home";
import Nzkf from "./pages/Nzkf";
import Locations from "./components/LocationsBar";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <div className="App">
      <div id="navbar">
        <Router>
          {/* insert component here */}
          <MenuBar />
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Kyudo" element={<Kyudo />} />
            <Route path="NZKF" element={<Nzkf />} />
            <Route path="Locations" element={<Locations />} />
            <Route path="ContactUS" element={<ContactUs />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
