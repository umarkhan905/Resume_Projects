import React, { useState } from "react";
import Heading from "./Heading";
import "./Dishes.css";
import Card from "./Card";
import Menu from "./Menu";

export default function Dishes({ setCartProducts }) {
  const [data, setData] = useState(Menu);

  const changeActive = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  };
  const filterCard = (val) => {
    const filteredData = Menu.filter((ele) => {
      return ele.category === val;
    });
    setData(filteredData);
  };

  const addToCart = (id) => {
    const data = Menu.filter((_, index) => {
      return index === id;
    });
    setCartProducts(data);
  };
  return (
    <>
      <div className="padding">
        <Heading title={"popular dishes"} />
        <div className="category">
          <span
            onClick={(e) => {
              setData(Menu);
              changeActive(e);
            }}
            className="active"
          >
            all
          </span>
          <span
            onClick={(e) => {
              filterCard("sandwich");
              changeActive(e);
            }}
          >
            sandwich
          </span>
          <span
            onClick={(e) => {
              filterCard("juice");
              changeActive(e);
            }}
          >
            juice
          </span>
          <span
            onClick={(e) => {
              filterCard("cake");
              changeActive(e);
            }}
          >
            cake
          </span>
          <span
            onClick={(e) => {
              filterCard("donut");
              changeActive(e);
            }}
          >
            donut
          </span>
        </div>
        <div className="cards">
          {data.map((element, index) => {
            const { category, imgSrc } = element;
            return (
              <Card
                id={index}
                key={index}
                imgSrc={imgSrc}
                title={category}
                onSelect={addToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
