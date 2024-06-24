import React from "react";
import Icons from "./Icons";
import Song from "./Song";

const Favorite = ({
  favSongs,
  filterFavSongs,
  setCurrentSong,
  setIsPlay,
  setRecentSongs,
  setShowAlert,
}) => {
  return (
    <>
      <Icons istrue={false} />
      <div className="fav_container" style={{ overflow: "auto" }}>
        <h2>favorite songs</h2>
        {favSongs.length === 0 ? (
          <p className="no_song">no favorite song</p>
        ) : (
          favSongs.map((element, index) => {
            const { artist, songName, imgSrc } = element;
            return (
              <>
                <Song
                  artist={artist}
                  songName={songName}
                  songNo={index + 1}
                  imgSrc={imgSrc}
                  key={index}
                  isRed={true}
                  filterFavSongs={filterFavSongs}
                  id={index}
                  setCurrentSong={setCurrentSong}
                  setIsPlay={setIsPlay}
                  setRecentSongs={setRecentSongs}
                  para={"remove from Favorite"}
                  setShowAlert={setShowAlert}
                />
              </>
            );
          })
        )}
      </div>
    </>
  );
};
export default Favorite;
