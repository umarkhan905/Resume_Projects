import React from "react";
import "./Card.css";
export default function Card({ imgSrc, title, onSelect, id }) {
  return (
    <>
      <div className="cards-body">
        <div className="card">
          <div className="image">
            <img src={imgSrc} alt="food" />
          </div>
          <h4>{title}</h4>
        </div>
        <button
          className="buy-btn"
          onClick={() => {
            onSelect(id);
          }}
        >
          Add to cart
        </button>
      </div>
    </>
  );
}
