import React from "react";
const Singer = ({ imgSrc, artist, setCurrentSongs, songName }) => {
  return (
    <>
      <div className="singer_container" onClick={() => setCurrentSongs(artist)}>
        <div className="image_container">
          <img src={imgSrc} alt="" className="singer" />
        </div>
        <p>{artist}</p>
        <p>{songName}</p>
      </div>
    </>
  );
};
export default Singer;
