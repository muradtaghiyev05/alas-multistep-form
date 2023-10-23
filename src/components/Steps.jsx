import React from "react";
import Step from "./Step";
import { useSelector } from "react-redux";

const Steps = () => {
  const page = useSelector((e) => e.page.value);
  return (
    <div className="Steps">
      <Step step={1} title={"PERSONAL INFO"} active={page == 0} />
      <Step step={2} title={"ACCOUNT INFO"} active={page == 1} />
      <Step step={3} title={"SUMMARY"} active={page >= 2} />
    </div>
  );
};

export default Steps;
