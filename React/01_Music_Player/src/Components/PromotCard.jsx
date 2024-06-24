import React from "react";
import "./style.css";
import SubHeading from "./SubHeading";

const PromotCard = ({ title, slogan1, slogan2, para, spanInfo, btnTxt }) => {
  const showBox = () => {
    const box = document.querySelector(".subscribe_premium_container");
    box.style.scale = "1";
  };
  return (
    <>
      <div className="buy_premium_container">
        <SubHeading heading={title} />
        <div className="buy_premium">
          <h2>{slogan1}</h2>
          <h3>{slogan2}</h3>
          <p>
            <span>{spanInfo}</span> {para}
          </p>
          <button className="premium_btn" onClick={showBox}>
            {btnTxt}
          </button>
        </div>
      </div>
    </>
  );
};

export default PromotCard;
