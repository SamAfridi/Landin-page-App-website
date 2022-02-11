import React, { useState } from "react";
import logo from "../images/logo.png";
import { useNavigate } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { Button } from "@material-ui/core";

function Nav() {
  const navigate = useNavigate();
  const [nav, setnav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setnav(true);
    } else {
      setnav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <nav className={nav ? "nav active" : "nav"}>
        <a href="#" className="logo">
          <img src={logo} alts="" />
        </a>
        <input type="checkbox" className="menu-btn" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <ul className="menu">
          <Link smooth to="#">
            <li>
              <a className="active">Home</a>
            </li>
          </Link>
          <Link smooth to="#contant">
            <li>
              <a>Feature</a>
            </li>
          </Link>

          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>

          <li>
         
            <a>Article</a>
           
          </li>
          <li>
            <a href="#">Download</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
