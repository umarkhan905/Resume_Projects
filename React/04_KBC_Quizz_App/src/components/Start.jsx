import React, { useRef } from "react";

const Start = ({ setUserName }) => {
  const inputRef = useRef();

  return (
    <div className="start_container">
      <div className="start">
        <input
          type="text"
          className="start_input"
          ref={inputRef}
          placeholder="Enter Your Name"
        />
        <button
          className="start_btn"
          onClick={() => setUserName(inputRef.current.value)}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Start;
