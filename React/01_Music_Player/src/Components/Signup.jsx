import React, { useState } from "react";
import "./style.css";
import Icons from "./Icons";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [data, setData] = useState("signup");
  const changeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData((oldData) => {
      return {
        ...oldData,
        [name]: value,
      };
    });
  };
  return (
    <>
      <Icons istrue={false} />
      <div className="form_container">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>{data}</h2>
          {data === "signup" ? (
            <div className="name">
              <input
                required
                onChange={changeValue}
                value={userData.name}
                type="text"
                name="name"
              />
              <label>Name</label>
            </div>
          ) : null}
          <div className="emial">
            <input
              required
              onChange={changeValue}
              value={userData.emial}
              type="email"
              name="email"
            />
            <label htmlFor="">Email</label>
          </div>
          <div className="password">
            <input
              required
              onChange={changeValue}
              value={userData.password}
              type="password"
              name="password"
            />
            <label htmlFor="">Password</label>
          </div>
          <div className="buttons">
            <button
              className="login btn"
              onClick={() => setData("login")}
              style={
                data === "login"
                  ? { background: "deeppink" }
                  : { background: "#3f3f3fb6" }
              }
            >
              login
            </button>
            <button
              className="login btn"
              onClick={() => setData("signup")}
              style={
                data === "signup"
                  ? { background: "deeppink" }
                  : { background: "#3f3f3fb6" }
              }
            >
              signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Signup;
