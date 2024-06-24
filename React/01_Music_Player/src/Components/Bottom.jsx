import React from "react";
import "./style.css";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

const Bottom = () => {
  const changeClass = (e) => {
    e.target.classList.add("active");
  };
  return (
    <>
      <div className="bottom">
        <NavLink to={"/"}>
          <i className="fa-sharp fa-solid fa-bars bars "></i>
        </NavLink>
        <NavLink onClick={changeClass} to={"/library"}>
          <LibraryMusicIcon className="library" onClick={changeClass} />
        </NavLink>
        <NavLink onClick={changeClass} to={"/favorite"}>
          <FavoriteIcon className="favorite" onClick={changeClass} />
        </NavLink>
        <NavLink onClick={changeClass} to={"/signup"}>
          <PersonIcon className="person" onClick={changeClass} />
        </NavLink>
      </div>
    </>
  );
};
export default Bottom;
