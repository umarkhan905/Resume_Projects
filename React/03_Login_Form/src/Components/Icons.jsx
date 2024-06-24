import React from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa6";

const Icons = () => {
  return (
    <>
      <span className="icon">
        <FaFacebookF />
      </span>
      <span className="icon">
        <FaLinkedinIn />
      </span>
      <span className="icon">
        <FaGoogle />
      </span>
    </>
  );
};

export default Icons;
