import React from "react";

const Links = ({ link }) => {
  return (
    <p className="link">
      <a href="/" style={{ color: "#B3B3B3" }}>
        {link}
      </a>
    </p>
  );
};

export default Links;
