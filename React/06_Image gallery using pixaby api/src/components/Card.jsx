import React from "react";

const Card = ({ src, user, views, downloads, tags }) => {
  return (
    <div className="card_container">
      <img src={src} alt="" width={300} height={200} />
      <p className="user">Photo by {user.replace("_", " ")}</p>
      <p className="views">views:{views}</p>
      <p className="downloads">downloads:{downloads}</p>
      <div className="tags">
        {tags.split(",").map((elem, index) => {
          return (
            <div className="tag" key={index}>
              #
              {elem.replace(" ", "").length > 10
                ? elem.replace(" ", "").slice(0, 7) + "..."
                : elem.replace(" ", "")}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
