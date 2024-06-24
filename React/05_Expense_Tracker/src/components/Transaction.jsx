import React from "react";

const Transaction = ({ handleClick, setData, data, option, payload }) => {
  return (
    <div className="transaction_container">
      <h1>Add New Transaction</h1>
      <div className="description">
        <h1>description</h1>
        <input
          type="text"
          placeholder="Enter description"
          value={data.description}
          name="description"
          onChange={(e) => setData(e)}
          autoComplete="off"
        />
      </div>
      <div className="amount">
        <h1>amount</h1>
        <input
          type="number"
          placeholder="Enter Amount"
          value={data.amount}
          name="amount"
          onChange={(e) => setData(e)}
          autoComplete="off"
        />
      </div>
      <div className="option">
        <input
          type="radio"
          name="option"
          id="expense"
          value={"expense"}
          onChange={(e) => setData(e)}
        />
        <label htmlFor="expense">expense</label>
        <input
          type="radio"
          name="option"
          id="income"
          value={"income"}
          onChange={(e) => setData(e)}
        />
        <label htmlFor="income">income</label>
      </div>
      <button
        className="btn"
        onClick={() => handleClick({ type: option, payload: payload })}
      >
        Add Transaction
      </button>
    </div>
  );
};

export default Transaction;
