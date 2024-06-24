import React from "react";
import PauseSharpIcon from "@mui/icons-material/PauseSharp";
import FastForwardSharpIcon from "@mui/icons-material/FastForwardSharp";
import FastRewindSharpIcon from "@mui/icons-material/FastRewindSharp";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Icons from "./Icons";
const PlayingSong = ({
  currentSong,
  isPlay,
  setIsPlay,
  nextSong,
  prevSong,
  currentTime,
  duration,
  handleSeekBarChange,
  cTime,
}) => {
  const cmin = Math.floor(cTime / 60);
  const csec = Math.floor(cTime % 60);
  const dmin = Math.floor(duration / 60);
  const dsec = Math.floor(duration % 60);
  return (
    <>
      <Icons istrue={true} showBars={true} />
      <div className="playing_song_container">
        <div className="currner_song_img">
          {currentSong === undefined ? null : (
            <img
              src={currentSong.imgSrc}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt=""
            />
          )}
        </div>
        <div className="song_info">
          <h1 className="title">
            {currentSong === undefined ? "Song Name" : currentSong.songName}
          </h1>
          <h2 className="singer">
            {currentSong === undefined ? "Artist Name" : currentSong.artist}
          </h2>
        </div>
        <div className="progress_bar_container">
          <input
            type="range"
            min={0}
            value={currentTime}
            max={100}
            onChange={handleSeekBarChange}
          />
        </div>
        <div className="time_container">
          <p>
            {cTime === "00:00"
              ? "00:00"
              : `${cmin <= 9 ? "0" + cmin : cmin}:${
                  csec <= 9 ? "0" + csec : csec
                }`}
          </p>
          <p>
            {duration === "00:00"
              ? "00:00"
              : `${dmin <= 9 ? "0" + dmin : dmin}:${
                  dsec <= 9 ? "0" + dsec : dsec
                }`}
          </p>
        </div>
        <div className="buttons">
          <div className="prev_Song" onClick={prevSong}>
            <FastRewindSharpIcon className="back" />
          </div>
          <div
            className="playing"
            onClick={() => {
              isPlay ? setIsPlay(false) : setIsPlay(true);
            }}
          >
            {isPlay ? (
              <PauseSharpIcon className="play" />
            ) : (
              <PlayArrowIcon className="play" />
            )}
          </div>
          <div className="next_song" onClick={nextSong}>
            <FastForwardSharpIcon className="next" />
          </div>
        </div>
      </div>
    </>
  );
};
export default PlayingSong;
