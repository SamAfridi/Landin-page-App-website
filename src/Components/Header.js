import React from "react";
import Contant from "./Contant";
import About from "./About";

function Header() {
  return (
    <>
      <div id="main">
        <div className="name">
          <h1>
            <span>Lanuch your App</span>with the confidence and creativity
          </h1>
          <p className="details">
            Lanuch your App with the confidence and creativity Lanuch your App
            with the confidence and creativity
          </p>
          <a href="#" className="cv-btn">
            Download
          </a>
        </div>
      </div>
      <Contant />
      <About />
    </>
  );
}

export default Header;
