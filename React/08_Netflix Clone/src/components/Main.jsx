import React from "react";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";

const Main = ({ heading, src, para, videoSrc, order1, order2 }) => {
  return (
    <main className="main_container">
      <div className="main_content" style={{ order: order1 }}>
        <MainHeading heading={heading} />
        <SubHeading heading={para} />
      </div>
      <div className="image_container" style={{ order: order2 }}>
        {src ? <img src={src} alt="" width={470} height={350} /> : null}
        <div className="video">
          {videoSrc ? (
            <video
              src={videoSrc}
              loop
              autoPlay
              muted
              width={345}
              height={360}
            ></video>
          ) : null}
        </div>
      </div>
    </main>
  );
};

export default Main;
