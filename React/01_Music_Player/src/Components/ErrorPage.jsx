import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  const img =
    "https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif";
  return (
    <>
      <div className="error_page_container">
        <div className="image">
          <img src={img} alt="" width={"50px"} />
          <h1>404 error</h1>
        </div>
        <h1 className="error">sorry,page does not exsit.</h1>
        <Link to={"/"}>Back to home</Link>
      </div>
    </>
  );
};

export default ErrorPage;
