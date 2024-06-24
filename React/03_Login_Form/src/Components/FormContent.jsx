import React, { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";

const FormContent = ({
  isLogin,
  setData,
  data,
  setUsers,
  forgetPass,
  setForgetPass,
  password,
  setPassword,
  setIsLogin,
}) => {
  const [isPassword, setisPassword] = useState("password");
  return (
    <>
      <form onSubmit={(e) => setUsers(e)}>
        {isLogin === "login" || isLogin === "forget password" ? null : (
          <div className="name">
            <input
              type="text"
              name="name"
              autoComplete="off"
              value={data.name}
              onChange={(e) => setData(e)}
              required
              placeholder="Full Name"
            />
          </div>
        )}
        <div className="email">
          <input
            type="email"
            name="email"
            autoComplete="off"
            value={data.email}
            onChange={(e) => setData(e)}
            required
            placeholder="Email"
          />
        </div>
        <div className="password">
          <input
            type={isPassword}
            name="password"
            autoComplete="off"
            value={data.password}
            onChange={(e) => setData(e)}
            required
            placeholder={password}
          />
          <div
            className="eye"
            onClick={() =>
              isPassword === "password"
                ? setisPassword("text")
                : setisPassword("password")
            }
          >
            {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
          </div>
        </div>
        {isLogin === "login" && forgetPass ? null : (
          <div className="con_password">
            <input
              type={isPassword}
              name="confpassword"
              autoComplete="off"
              value={data.confpassword}
              onChange={(e) => setData(e)}
              required
              placeholder="Confirm Password"
            />
            <div
              className="eye"
              onClick={() =>
                isPassword === "password"
                  ? setisPassword("text")
                  : setisPassword("password")
              }
            >
              {isPassword === "password" ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        )}
        {isLogin === "login" && forgetPass ? (
          <p
            className="forget"
            onClick={() => {
              setForgetPass(false);
              console.log(forgetPass);
              password === "Password"
                ? setPassword("New Password")
                : setPassword("Password");
              setIsLogin("forget password");
            }}
          >
            forgot your password
          </p>
        ) : null}
        {forgetPass && (
          <button className="btn" type="submit">
            {isLogin}
          </button>
        )}
        {!forgetPass && <button className="btn">Confirm</button>}
      </form>
    </>
  );
};

export default FormContent;
