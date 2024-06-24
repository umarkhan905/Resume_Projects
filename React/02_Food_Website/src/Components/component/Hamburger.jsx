import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Hamburger.css";
import menu from "../assets/menu.png";
import { Link } from "react-router-dom";

export default function Hamburger({
  home,
  about,
  dishes,
  chef,
  speciality,
  order,
  cartProducts,
}) {
  const [height, setHeight] = useState({
    height: "0",
    opacity: 0,
    visibility: "hidden",
  });
  const showMenu = () => {
    if (height.opacity === 0) {
      setHeight({
        height: "200px",
        opacity: 1,
        visibility: "visible",
      });
    } else {
      setHeight({
        height: "0px",
        opacity: 0,
        visibility: "hidden",
      });
    }
  };
  return (
    <div className="hamburger">
      <div className="hamburger-menu" onClick={showMenu}>
        {/* <span></span>
            <span></span>
            <span></span> */}
        <img src={menu} style={{ width: "30px", cursor: "pointer" }} alt="" />
      </div>
      <ul className="hamlist" style={height}>
        <li>
          <Link to="/">{home}</Link>
        </li>
        <li>
          <Link to="/about">{about}</Link>
        </li>
        <li>
          <Link to="/dishes">{dishes}</Link>
        </li>
        <li>
          <Link to="/chef">{chef}</Link>
        </li>
        <li>
          <Link to="/">{speciality}</Link>
        </li>
        <li>
          <Link to="/">{order}</Link>
        </li>
        <li className="user-cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
          <span>{cartProducts.length}</span>
        </li>
      </ul>
    </div>
  );
}

Hamburger.defaultProps = {
  home: "home",
  about: "about",
  dishes: "dishes",
  chef: "chef",
  speciality: "speciality",
  order: "order",
};
Hamburger.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  dishes: PropTypes.string.isRequired,
  chef: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};
