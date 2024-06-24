import React, { useState, useRef, useEffect } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Bottom from "./Bottom";
import PlayingSong from "./PlayingSong";
import Library from "./Library";
import Favorite from "./Favorite";
import Signup from "./Signup";
import Playlists from "./Playlists";
import SongsData from "./SongsData";
import ErrorPage from "./ErrorPage";
import AlertPage from "./AlertPage";

const Body = () => {
  const [currentSongs, setCurrentSongs] = useState([]);
  const [favSongs, setFavSongs] = useState([]);
  const [currentHeading, setCurrentHeading] = useState("");
  const [isPlay, setIsPlay] = useState(false);
  const [recentSongs, setRecentSongs] = useState([]);
  const [cIndex, setcIndex] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState("00:00");
  const [cTime, setCTime] = useState("00:00");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [changeTime, setChangeTime] = useState(0);
  const nextSong = () => {
    if (cIndex !== currentSongs.length - 1) {
      setcIndex(cIndex + 1);
    }
  };
  const prevSong = () => {
    if (cIndex > 0) {
      setcIndex(cIndex - 1);
    }
  };
  const currentSongFunc = (id) => {
    setcIndex(id);
  };
  const isPlayFunc = (value) => {
    setIsPlay(value);
  };
  const recentSongFunc = (song) => {
    if (recentSongs.length === 6) {
      recentSongs.shift();
    }
    if (recentSongs.length !== 6 && song !== undefined) {
      setRecentSongs((oldData) => {
        return [...oldData, song];
      });
    }
  };
  const filteredSongsData = (data) => {
    const filteredData = SongsData.filter((element) => {
      return (
        element.artist.toLowerCase() === data.toLowerCase() ||
        element.genre.toLowerCase() === data.toLowerCase()
      );
    });
    setCurrentSongs(filteredData);
    setCurrentHeading(data);
  };

  const favoriteSongs = (favSongs) => {
    setFavSongs((oldData) => {
      return [...oldData, favSongs];
    });
  };
  const filterFavSongs = (id) => {
    const filteredData = favSongs.filter((_, index) => {
      return index !== id;
    });
    setFavSongs(filteredData);
  };
  const playSong = useRef();
  useEffect(() => {
    if (isPlay === true) {
      playSong.current.play();
    } else {
      playSong.current.pause();
    }
  });
  const onPlaying = () => {
    const ct = playSong.current.currentTime;
    const cduration = playSong.current.duration;
    setCurrentTime((ct / cduration) * 100);
    setDuration(cduration);
    setCTime(ct);
  };
  const handleSeekBarChange = (e) => {
    const newTime = parseFloat(e.target.value);
    const cduration = playSong.current.duration;
    setChangeTime((newTime * cduration) / 100);
    playSong.current.currentTime = changeTime;
    setCurrentTime(newTime);
  };
  const showAlertFunc = (value, msg) => {
    setShowAlert(value);
    setAlertMsg(msg);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };
  return (
    <>
      <audio
        ref={playSong}
        src={
          currentSongs[cIndex] === undefined ? null : currentSongs[cIndex].src
        }
        onTimeUpdate={onPlaying}
      ></audio>
      <div className="box">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PlayingSong
                  currentSong={currentSongs[cIndex]}
                  isPlay={isPlay}
                  setIsPlay={isPlayFunc}
                  nextSong={nextSong}
                  prevSong={prevSong}
                  playSong={playSong}
                  currentTime={currentTime}
                  handleSeekBarChange={handleSeekBarChange}
                  duration={duration}
                  cTime={cTime}
                />
              }
            />
            <Route
              path="/library"
              element={
                <Library
                  currentSongs={currentSongs}
                  setFavSongs={favoriteSongs}
                  filterFavSongs={filterFavSongs}
                  currentHeading={currentHeading}
                  setCurrentSong={currentSongFunc}
                  setIsPlay={isPlayFunc}
                  setRecentSongs={recentSongFunc}
                  setShowAlert={showAlertFunc}
                />
              }
            />
            <Route
              path="/favorite"
              element={
                <Favorite
                  favSongs={favSongs}
                  filterFavSongs={filterFavSongs}
                  setCurrentSong={currentSongFunc}
                  setIsPlay={isPlayFunc}
                  setRecentSongs={recentSongFunc}
                  setShowAlert={showAlertFunc}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/from_music_player"
              element={
                <Playlists
                  setCurrentSongs={filteredSongsData}
                  recentSongs={recentSongs}
                  setShowAlert={showAlertFunc}
                />
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Bottom />
          {showAlert && <AlertPage alertMsg={alertMsg} />}
        </Router>
      </div>
    </>
  );
};
export default Body;
