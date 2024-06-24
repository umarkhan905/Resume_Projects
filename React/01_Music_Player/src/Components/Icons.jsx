import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Icons = ({ istrue, showBars }) => {
  return (
    <>
      <div className="icons">
        {istrue ? (
          <Link style={{ color: "#fff" }} to={"/from_music_player"}>
            <i className="fa-sharp fa-solid fa-bars"></i>
          </Link>
        ) : (
          <Link style={{ color: "#fff" }} to={"/"}>
            <i className="fa-sharp fa-solid fa-arrow-left"></i>
          </Link>
        )}

        {showBars ? null : (
          <Link style={{ color: "#fff" }} to={"/from_music_player"}>
            <i className="fa-sharp fa-solid fa-bars"></i>
          </Link>
        )}
      </div>
    </>
  );
};
export default Icons;
