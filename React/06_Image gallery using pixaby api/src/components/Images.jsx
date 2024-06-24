import React from "react";
import Card from "./Card";

const Images = ({ imgData, loading }) => {
  return (
    <div className="images_container">
      {!loading && imgData.length === 0 && (
        <h2 className="error">No Image Found</h2>
      )}
      {imgData.map((elem, index) => {
        return (
          <Card
            src={elem.largeImageURL}
            key={index}
            user={elem.user}
            views={elem.views}
            downloads={elem.downloads}
            tags={elem.tags}
          />
        );
      })}
    </div>
  );
};

export default Images;
