import React from "react";

const History = ({ history, filter, setFilter }) => {
  return (
    <div className="history_container">
      <h1>History</h1>
      <input
        type="text"
        placeholder="Search here "
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <div className="items_container">
        {history.map((elem, index) => {
          return elem.option === "income" ? (
            <div
              className="wrapper"
              key={index}
              style={{ borderRight: "3px solid limegreen" }}
            >
              <p>{elem.description}</p>
              <p>${elem.amount}</p>
            </div>
          ) : (
            <div
              className="wrapper"
              key={index}
              style={{ borderRight: "3px solid crimson" }}
            >
              <p>{elem.description}</p>
              <p>${elem.amount}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default History;
