import React from "react";
import Header from "./Header";
import Hr from "./Hr";
import Main from "./Main";
import Tv from "../assets/tv.png";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hr />
      <Main
        order1={"1"}
        order2={"2"}
        videoSrc={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
        }
        src={Tv}
        heading={"Enjoy on your TV"}
        para={
          "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
        }
      />
      <Hr />
      <Main
        order1={"2"}
        order2={"1"}
        src={
          "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
        }
        heading={"Download your shows to watch offline"}
        para={"Save your favorites easily and always have something to watch."}
      />
      <Hr />
      <Main
        heading={"Watch everywhere"}
        para={
          "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        }
      />
      <Hr />
      <Main
        order1={"2"}
        order2={"1"}
        src={
          "https://occ-0-5937-58.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABejKYujIIDQciqmGJJ8BtXkYKKTi5jiqexltvN1YmvXYIfX8B9CYwooUSIzOKneblRFthZAFsYLMgKMyNfeHwk16DmEkpIIcb6A3.png?r=f55"
        }
        heading={"Create profiles for kids"}
        para={
          "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
        }
      />
      <Hr />
      <Faq />
      <Hr />
      <Footer />
    </>
  );
};

export default Home;
