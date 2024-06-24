import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { HiOutlineXMark } from "react-icons/hi2";
const AccordianItem = ({ question, para1, para2 }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="main">
      <div className="accordian_heading" onClick={() => setIsShow(!isShow)}>
        <p>{question}</p>
        {isShow ? (
          <HiOutlineXMark className="plus" />
        ) : (
          <GoPlus className="plus" />
        )}
      </div>
      {isShow && (
        <div className="accordian_body">
          <p>{para1}</p>
          <p>{para2}</p>
        </div>
      )}
    </div>
  );
};

export default AccordianItem;
