import React from "react";

const AlertPage = ({ alertMsg }) => {
  return (
    <>
      <div className="alert">
        <p>{alertMsg}!</p>
      </div>
    </>
  );
};

export default AlertPage;
