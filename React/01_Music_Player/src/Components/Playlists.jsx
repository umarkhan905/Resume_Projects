import React, { useState } from "react";
import "./style.css";
import PromotCard from "./PromotCard";
import Genre from "./Genre";
import Singers from "./Singers";
import RecentSongs from "./RecentSongs";
import Icons from "./Icons";

const Playlists = ({ setCurrentSongs, recentSongs, setShowAlert }) => {
  const [search, setSearch] = useState("");
  const showBox = () => {
    const box = document.querySelector(".subscribe_premium_container");
    box.style.scale = "0";
  };
  const SubscirePremium = () => {
    return (
      <>
        <div className="subscribe_premium_container">
          <div className="premium_overly" onClick={showBox}></div>
          <div className="subscribe_box">
            <div className="email_box">
              <input type="email" required />
              <label htmlFor="">email</label>
            </div>
            <button
              className="btn submit"
              onClick={() => {
                alert("Thanks For Subscribing :)");
                showBox();
              }}
            >
              Submit
            </button>
            <button className="btn cancel" onClick={showBox}>
              Cancel
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <Icons istrue={false} showBars={true} />
      <div className="playlists_container">
        <h2>From Music Player</h2>
        <div className="search_song">
          <input
            type="search"
            className="search"
            placeholder="Search Artist,Genre "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <PromotCard
          title={"buy premium"}
          slogan1={"get free trail for one month."}
          slogan2={"buy premium plus now."}
          spanInfo={"40% off"}
          para={"on premium pass.grab the deal now."}
          btnTxt={"buy now"}
        />
        <Genre
          searchValue={search}
          setCurrentSongs={setCurrentSongs}
          setShowAlert={setShowAlert}
        />
        <Singers searchValue={search} setCurrentSongs={setCurrentSongs} />
        <RecentSongs recentSongs={recentSongs} />
        <SubscirePremium />
      </div>
    </>
  );
};

export default Playlists;
