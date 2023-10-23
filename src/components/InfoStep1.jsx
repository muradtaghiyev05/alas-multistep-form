import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { info } from "../features/userSlice";
import { useState, useEffect, useRef } from "react";

const InfoStep1 = () => {
  const [perinfo, setPer] = useState({
    name: "",
    phone: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((e) => e.user.value);

  const refName = useRef();
  const refPhone = useRef();

  const phoneVal = (e) => {
    const regex = /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/;
    return regex.test(e);
  };

  useEffect(() => {
    dispatch(
      info({
        ...user,
        name: refName.current.value,
        phone: refPhone.current.value,
        phoneValid: phoneVal(refPhone.current.value),
      })
    );
  }, [perinfo.name, perinfo.phone]);

  return (
    <div className="info">
      <h2>Personal info</h2>
      <p>Please provide your name and phone number.</p>
      <form className="form" autoComplete="on">
        <div className="fields">
          <div className="dflex">
            <label>Name</label>
            {user.nextClick && (
              <span>
                {user.name.length < 3 && "Name must be at least 3 characters"}
              </span>
            )}
          </div>
          <input
            type="text"
            ref={refName}
            autoComplete="on"
            placeholder="e.g. Murad Taghiyev"
            className={user.name.length < 3 && user.nextClick ? "error" : ""}
            onChange={(e) => setPer({ ...perinfo, name: e.target.value })}
          />
        </div>
        <div className="fields">
          <div className="dflex">
            <label>Phone Number</label>
            {!user.phoneValid && user.nextClick && (
              <span>Invalid phone number</span>
            )}
          </div>
          <input
            type="text"
            ref={refPhone}
            placeholder="e.g. 050-123-45-67"
            inputMode="tel"
            className={!user.phoneValid && user.nextClick ? "error" : ""}
            onChange={(e) => {
              setPer({ ...perinfo, phone: e.target.value });
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default InfoStep1;
