import React from "react";
import thankyou from "../assets/icon-thank-you.svg";

const ThanksStep = () => {
  return (
    <div className="thanks">
      <img src={thankyou} alt="Subscription confirmed" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform.
      </p>
      <div className="reset">
        <button onClick={() => window.location.reload()}>
          Create a new form
        </button>
      </div>
    </div>
  );
};

export default ThanksStep;
