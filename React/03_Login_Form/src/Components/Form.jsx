import React, { useState, useEffect } from "react";
import Icons from "./Icons";
import FormContent from "./FormContent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getUsers = () => {
  const users = localStorage.getItem("users");
  // console.log(users, "user");
  if (users) {
    return JSON.parse(localStorage.getItem("users"));
  } else {
    return [];
  }
};
const Form = () => {
  const [isLogin, setIsLogin] = useState("login");
  const [data, setData] = useState({
    name: "",
    password: "",
    email: "",
    confpassword: "",
  });
  const [users, setUsers] = useState(getUsers());
  const [isShow, setIsShow] = useState(false);
  const [forgetPass, setForgetPass] = useState(true);
  const [password, setPassword] = useState("Password");

  const setIsLoginFunc = (value) => {
    setIsLogin(value);
  };
  const setPasswordFunc = (value) => {
    setPassword(value);
  };
  const forgetPassFunc = (value) => {
    setForgetPass(value);
  };
  const setDataFunc = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ id: new Date().getTime().toString(), ...data, [name]: value });
  };

  const setUsersFunc = (e) => {
    e.preventDefault();
    const findEmail = users.find((elem) => {
      return elem.email === data.email;
    });

    switch (isLogin) {
      case "sign up":
        if (!findEmail) {
          if (data.password === data.confpassword) {
            setIsShow(true);
            toast.success("signup successfully");
            setUsers([...users, data]);
            setData({
              name: "",
              password: "",
              email: "",
              confpassword: "",
            });
            setIsLogin("login");
          } else {
            setIsShow(true);
            toast.error("Password Doesn't Match");
          }
        } else {
          setIsShow(true);
          toast.error("Email Already Exists");
        }
        break;
      case "login":
        if (findEmail) {
          if (findEmail.password === data.password) {
            setIsShow(true);
            toast.success("login successfully");
            setData({
              name: "",
              password: "",
              email: "",
              confpassword: "",
            });
          } else {
            setIsShow(true);
            toast.error("Password Doesn't Match");
          }
        } else {
          setIsShow(true);
          toast.error("Email Doesn't Exist");
        }
        break;
      default:
        if (findEmail) {
          setUsers(
            users.map((elem) => {
              if (
                elem.id === findEmail.id &&
                data.password === data.confpassword
              ) {
                setData({
                  name: "",
                  password: "",
                  email: "",
                  confpassword: "",
                });
                setIsShow(true);
                toast.success("Password Update Successfully");
                setIsLogin("login");
                setForgetPass(true);
                setPassword("Password");
                return {
                  ...elem,
                  password: data.password,
                  confpassword: data.confpassword,
                };
              } else {
                setIsShow(true);
                toast.error("Password Doesn't Match");
              }
              return elem;
            })
          );
        } else {
          setIsShow(true);
          toast.error("Email Not Found");
        }
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <>
      <div className="form_container">
        <div className="form">
          <h1>{isLogin}</h1>
          <Icons />
          {isLogin === "login" ? (
            <p>or use your account</p>
          ) : (
            <p>or signup for new account</p>
          )}
          <FormContent
            isLogin={isLogin}
            data={data}
            setData={setDataFunc}
            setUsers={setUsersFunc}
            forgetPass={forgetPass}
            setForgetPass={forgetPassFunc}
            password={password}
            setPassword={setPasswordFunc}
            setIsLogin={setIsLoginFunc}
          />
        </div>
        <div className="content">
          <h1>Hello Friend</h1>
          {isLogin === "login" ? (
            <p>enter your details and start journey with us</p>
          ) : (
            <p>enter your details and login to your account</p>
          )}
          <button
            className="submit"
            onClick={() => {
              isLogin === "login" ? setIsLogin("sign up") : setIsLogin("login");
              setForgetPass(true);
              setPassword("Password");
            }}
          >
            {isLogin === "login" ? "sign up" : "login"}
          </button>
        </div>
        {isShow && (
          <ToastContainer position="top-center" autoClose={1000} theme="dark" />
        )}
      </div>
    </>
  );
};

export default Form;
