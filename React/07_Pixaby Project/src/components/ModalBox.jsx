import React from "react";

const ModalBox = ({ src, setIsShow }) => {
  return (
    <div className="overly" onClick={() => setIsShow(false)}>
      <div className="modal_container">
        <img src={src} alt="" width={480} height={300} />
        <p onClick={() => setIsShow(false)}>close</p>
      </div>
    </div>
  );
};

export default ModalBox;
