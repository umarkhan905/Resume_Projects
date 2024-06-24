import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav_list">
        <li>
          <img src={Logo} alt="" width={180} height={110} className="logo" />
        </li>
        <li>
          <Link to={"/signin"}>
            <button className="btn_promary">Sign in</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
