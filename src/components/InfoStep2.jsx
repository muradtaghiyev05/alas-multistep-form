import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/userSlice";
import { useState, useEffect, useRef } from "react";

const InfoStep2 = () => {
  const [perinfo, setPer] = useState({
    email: "",
    password: "",
  });

  const user = useSelector((e) => e.user.value);
  const dispatch = useDispatch();

  const passwordVal = (e) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(e);
  };

  const emailval = (e) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,10})$/i;
    return regex.test(e);
  };

  const refEmail = useRef();
  const refPassword = useRef();

  useEffect(() => {
    dispatch(
      info({
        ...user,
        email: refEmail.current.value,
        password: refPassword.current.value,
        emailValid: emailval(refEmail.current.value),
        passwordValid: passwordVal(refPassword.current.value),
      })
    );
  }, [perinfo.password, perinfo.email]);

  return (
    <div className="info">
      <h2>Personal info</h2>
      <p>Please provide your email address and password.</p>
      <form className="form">
        <div className="fields">
          <div className="dflex">
            <label>Email Address</label>
            {!user.emailValid && user.nextClick && (
              <span>
                {user.email == ""
                  ? "This field is required"
                  : "Invalid Email Address"}
              </span>
            )}
          </div>
          <input
            type="text"
            ref={refEmail}
            inputMode="email"
            placeholder="e.g. murad@gmail.com"
            className={!user.emailValid && user.nextClick ? "error" : ""}
            onChange={(e) => setPer({ ...perinfo, email: e.target.value })}
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Password</label>
          </div>
          <input
            type="password"
            ref={refPassword}
            className={!user.passwordValid && user.nextClick ? "error" : ""}
            onChange={(e) => {
              setPer({ ...perinfo, password: e.target.value });
            }}
          />
          {!user.passwordValid && user.nextClick && (
            <div className="input-error">
              Password must be min 8 characters, with at least a special symbol,
              upper and lower case letters and a number.
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default InfoStep2;
