import React from "react";
import "./Navbar.css";
import PropTypes from "prop-types";
import Icon from "./Icon";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import twitter from "../assets/twitter.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";
export default function Navbar({
  logo,
  address,
  home,
  about,
  dishes,
  chef,
  speciality,
  order,
  cartProducts,
}) {
  // const[sticky,setSticky]=useState({});
  // window.addEventListener("scroll",()=>{
  //     if(window.pageYOffset>=41){
  //         setSticky({
  //             position:"fixed",
  //             top:0
  //         })
  //     }else{
  //         setSticky({});
  //     }
  // })
  window.addEventListener("scroll", () => {
    if (window.pageYOffset >= 41) {
      document.querySelector(".navbar").classList.add("sticky");
    } else {
      document.querySelector(".navbar").classList.remove("sticky");
    }
  });
  return (
    <div className="main-nav">
      <div className="navsection">
        <h1>{logo}</h1>
        <p>{address}</p>
      </div>
      <nav className="navbar">
        <div className="left-side">
          <ul className="navlist">
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
        <Hamburger cartProducts={cartProducts} />
        <div className="right-side">
          <Icon imgSrc={facebook} />
          <Icon imgSrc={instagram} />
          <Icon imgSrc={twitter} />
          <Icon imgSrc={linkedin} />
        </div>
      </nav>
    </div>
  );
}

Navbar.defaultProps = {
  home: "home",
  about: "about",
  dishes: "dishes",
  chef: "chef",
  speciality: "speciality",
  order: "order",
};
Navbar.propTypes = {
  home: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  dishes: PropTypes.string.isRequired,
  chef: PropTypes.string.isRequired,
  speciality: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
};
