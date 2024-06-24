import React from "react";
import Links from "./Link";
import links from "./links";

const Footer = () => {
  return (
    <div className="footer_container">
      <Links link={"Questions? Contact us."} />
      <div className="links_container">
        {links.map((elem) => {
          return <Links key={elem.id} link={elem.para} />;
        })}
      </div>
      <select name="" id="">
        <option value="English">
          <span>&#20803;A</span>English
        </option>
      </select>
      <p className="bottom">Netflix Pakistan</p>
    </div>
  );
};

export default Footer;
