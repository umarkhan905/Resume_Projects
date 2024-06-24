import React from "react";
import "./style.css";

const GenreInfo = ({ genre, setCurrentSongs, setShowAlert }) => {
  return (
    <>
      <div
        className="genre"
        onClick={() => {
          setCurrentSongs(genre);
          setShowAlert(true, "Add to library");
        }}
      >
        <p>{genre}</p>
      </div>
    </>
  );
};

export default GenreInfo;
