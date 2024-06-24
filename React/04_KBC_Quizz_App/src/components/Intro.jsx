import React from "react";

const Intro = ({ setIntro }) => {
  return (
    <div className="intro">
      <button className="btn" onClick={() => setIntro(true)}>
        Start
      </button>
    </div>
  );
};

export default Intro;
