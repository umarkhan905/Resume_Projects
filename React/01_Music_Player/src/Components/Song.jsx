import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

const Song = ({
  artist,
  songName,
  imgSrc,
  songNo,
  setFavSongs,
  data,
  filterFavSongs,
  id,
  isRed,
  setCurrentSong,
  setIsPlay,
  setRecentSongs,
  para,
  setShowAlert,
}) => {
  return (
    <>
      <div
        className="song_container"
        onClick={() => {
          setCurrentSong(id);
          setIsPlay(true);
          setRecentSongs(data);
          setShowAlert(true, "Song Played");
        }}
      >
        <div className="song_number">
          <p>{songNo <= 9 ? "0" + songNo : songNo}</p>
        </div>
        <div className="song_image">
          <img
            src={imgSrc}
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="song_title">
          <p>
            {songName.length >= 10 ? songName.slice(0, 10) + "..." : songName}
          </p>
          <p>{artist}</p>
        </div>
        <div
          className="fav_song"
          onClick={() => {
            if (isRed === false) {
              setFavSongs(data);
            } else if (isRed === true) {
              filterFavSongs(id);
            }
          }}
          style={isRed ? { color: "red" } : { color: "#fff" }}
        >
          {isRed ? <FavoriteIcon /> : <AddIcon />}
        </div>
        <p className="tool_tip">{para}</p>
      </div>
    </>
  );
};

export default Song;
