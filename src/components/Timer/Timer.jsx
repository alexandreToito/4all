import React, { useContext } from "react";

import { ParseContext } from "../../context/Parse.jsx";

import "./Timer.scss";

const Timer = ({ className }) => {
  const { minutes, seconds } = useContext(ParseContext);

  return (
    <div className="timer">
      <div className="timer-minutes">{minutes}</div>
      <span>m</span>
      <div className="timer-seconds">{seconds}</div>
      <span>s</span>
    </div>
  );
};

export default Timer;
