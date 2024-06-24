import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Card = ({ src, tags, user, setCurrnetImage }) => {
  return (
    <div className="card">
      <img src={src} alt="" width={320} height={150} />
      <div className="strip">
        <div className="author">
          <p className="user">
            {tags.length > 50 ? tags.slice(0, 50) + "..." : tags}
          </p>
          <p className="by">
            <span>By</span> {user}
          </p>
        </div>
        <div className="glass" onClick={() => setCurrnetImage(src)}>
          <FaMagnifyingGlass />
        </div>
      </div>
    </div>
  );
};

export default Card;
