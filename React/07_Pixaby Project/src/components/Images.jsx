import React from "react";
import Card from "./Card";

const Images = ({ data, text, setCurrnetImage }) => {
  const img =
    "https://i.pinimg.com/originals/fb/ed/b2/fbedb25b550829b8b4c4984b45992b39.gif";
  return (
    <div className="images_container">
      {text === "" ? null : text !== "" && data.length === 0 ? (
        <>
          <img src={img} alt="" width={90} height={90} />
          <h1>Oops!Image Not Found</h1>
        </>
      ) : (
        data.map((elem, index) => {
          return (
            <Card
              src={elem.webformatURL}
              key={index}
              user={elem.user}
              tags={elem.tags}
              setCurrnetImage={setCurrnetImage}
            />
          );
        })
      )}
    </div>
  );
};

export default Images;
