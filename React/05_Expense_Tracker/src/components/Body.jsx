import React from "react";

const Body = ({ expense, income }) => {
  return (
    <div className="body">
      <div className="income">
        <h1>Income</h1>
        <p>${income}</p>
      </div>
      <div className="expense">
        <h1>Expnese</h1>
        <p>${expense}</p>
      </div>
    </div>
  );
};

export default Body;
