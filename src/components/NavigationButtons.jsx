import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { back, next } from "../features/pageSlice";
import { info } from "../features/userSlice";

const NavigationButtons = () => {
  const page = useSelector((e) => e.page.value);
  const user = useSelector((e) => e.user.value);
  const dispatch = useDispatch();

  const nextClick = () => {
    dispatch(info({ ...user, nextClick: true }));
    if (user.phoneValid && user.name.length > 3 && page == 0) {
      dispatch(next());
    }

    if (user.emailValid && user.passwordValid && page == 1) {
      dispatch(next());
    }

    if (page > 1) {
      dispatch(next());
    }
  };

  return (
    <div className={page == 0 ? "navigation btnRight" : "navigation"}>
      {page != 0 && (
        <button className="btn1" onClick={() => dispatch(back())}>
          Go Back
        </button>
      )}
      <button className="btn2" onClick={nextClick}>
        {page == 2 ? "Confirm" : "Next Step"}
      </button>
    </div>
  );
};

export default NavigationButtons;
