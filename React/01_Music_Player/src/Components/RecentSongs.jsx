import React from "react";
import SubHeading from "./SubHeading";
import "./style.css";

const RecentSongs = ({ recentSongs }) => {
  const Song = ({ imgSrc, artist, songName }) => {
    return (
      <>
        <div className="recent_played">
          <div className="image_container">
            <img src={imgSrc} alt="" className="singer" />
          </div>
          <p className="song_name">
            {songName.length >= 10 ? songName.slice(0, 10) + "..." : songName}
          </p>
          <p>{artist}</p>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="recent_songs_container">
        <SubHeading heading={"recent Played"} />
        <div className="recent_songs">
          {recentSongs.map((element, index) => {
            const { imgSrc, artist, songName } = element;
            return (
              <>
                <Song imgSrc={imgSrc} artist={artist} songName={songName} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RecentSongs;
