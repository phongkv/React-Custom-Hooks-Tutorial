import React, { useEffect, useState } from "react";

export const CountUp = () => {
  const [seconds, setSeconds] = useState(0);
  const [stop, setStop] = useState(true);

  useEffect(() => {
    let intervalId: number | undefined = undefined;
    if (!stop) {
      intervalId = window.setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (stop && seconds !== 0) {
      window.clearInterval(intervalId);
    }
    return () => {
      window.clearInterval(intervalId);
    };
  }, [stop, seconds]);

  const toggle = () => {
    setStop(!stop);
  };
  const reset = () => {
    setSeconds(0);
    setStop(true);
  };
  return (
    <div>
      <div className="time">{seconds}s</div>
      <div className="row group-btn">
        <button
          className={`button button-primary button-primary-${
            stop ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {stop ? (
            <i className="material-icons">play_arrow</i>
          ) : (
            <i className="material-icons">pause</i>
          )}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
