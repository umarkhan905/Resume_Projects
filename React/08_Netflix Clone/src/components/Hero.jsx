import React from "react";
import Input from "./Input";
import MainHeading from "./MainHeading";
import SubHeading from "./SubHeading";
import SmallHeading from "./SmallHeading";

const Hero = () => {
  return (
    <div className="hero">
      <MainHeading heading={"Unlimited movies, TV shows, and more"} />
      <SubHeading heading={"Watch anywhere. Cancel anytime."} />
      <SmallHeading
        heading={
          "Ready to watch? Enter your email to create or restart your membership."
        }
      />
      <Input />
    </div>
  );
};

export default Hero;
