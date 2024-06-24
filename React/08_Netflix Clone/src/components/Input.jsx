import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
const Input = () => {
  const [text, setText] = useState("");
  return (
    <div className="input_container">
      <div className="email_container">
        <input
          type="text"
          className="input_email"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <label htmlFor="" className="input_label">
          Email address
        </label>
      </div>
      <button className="input_btn">
        get started <FaAngleRight className="angle" />
      </button>
    </div>
  );
};

export default Input;
