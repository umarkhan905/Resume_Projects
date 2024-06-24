import React, { useState } from "react";
import Heading from "./Heading";
import "./Cart.css";
import { FaTrash, FaTruckMoving } from "react-icons/fa";
export default function Cart({ cartProducts, removeItems }) {
  const CartItem = ({ id, itemSrc, category, removeItems }) => {
    const [count, setCount] = useState(1);
    return (
      <>
        <div className="item">
          <img src={itemSrc} alt="" />
          <div className="info">
            <h2>{category}</h2>
            <input
              type="number"
              value={count}
              onChange={(e) => setCount(e.target.value)}
            />
          </div>
          <div className="buttons">
            <button className="remove" onClick={() => removeItems(id)}>
              <FaTrash />
            </button>
            <button
              className="remove"
              onClick={() =>
                alert("Your Item Has Delivered Successfully.Keep Shoping :)")
              }
            >
              <FaTruckMoving />
            </button>
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="cart-container padding">
        <Heading className="heading" title={"cart items"} />
        <div className="cart-items">
          {cartProducts.length === 0 ? (
            <h1 className="no_items">No Items In Cart</h1>
          ) : (
            cartProducts.map((elem, index) => {
              const [{ itemSrc, category }] = elem;
              return (
                <CartItem
                  key={index}
                  itemSrc={itemSrc}
                  category={category}
                  id={index}
                  removeItems={removeItems}
                />
              );
            })
          )}
        </div>
      </div>
    </>
  );
}
