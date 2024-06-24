import React from "react";
import Icons from "./Icons";
import Song from "./Song";

const Library = ({
  currentSongs,
  setFavSongs,
  filterFavSongs,
  currentHeading,
  setCurrentSong,
  setIsPlay,
  setRecentSongs,
  setShowAlert,
}) => {
  return (
    <>
      <div className="labrary_icon">
        <Icons istrue={false} />
      </div>
      <div className="library_container">
        <h2>{currentHeading === "" ? "library" : "#" + currentHeading}</h2>
        <div className="songs">
          {currentSongs.length === 0 ? (
            <p className="no_song">No Song In Library </p>
          ) : (
            currentSongs.map((element, index) => {
              const { artist, songName, imgSrc } = element;
              return (
                <>
                  <Song
                    artist={artist}
                    songName={songName}
                    songNo={index + 1}
                    imgSrc={imgSrc}
                    key={index}
                    setFavSongs={setFavSongs}
                    data={element}
                    id={index}
                    filterFavSongs={filterFavSongs}
                    isRed={false}
                    setCurrentSong={setCurrentSong}
                    setIsPlay={setIsPlay}
                    setRecentSongs={setRecentSongs}
                    para={"add to Favorite"}
                    setShowAlert={setShowAlert}
                  />
                </>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};
export default Library;
