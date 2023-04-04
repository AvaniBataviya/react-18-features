import React, { useState } from "react";

const AutomaticBatching = () => {
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  console.log("Component Rendering");

  // useEffect(() => {
  //   console.log("first");

  //   return () => {
  //     console.log("second");
  //   };
  // }, []);

  // click event
  const handleClick = () => {
    setScore(score + 1);
    setFlag(!flag);
  };

  // async operation
  const handleAsyncClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1").then(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setScore(score + 1);
      setFlag(!flag);
      // after api call mutiple set state i.e loading, set response, set errors
    });
  };

  // timeout/interval
  const handleTimeOutClick = () => {
    setTimeout(() => {
      // trigger 1 re-render due to React 18 Improved Batching
      setScore(score + 1);
      setFlag(!flag);
    });
  };

  return (
    <div>
      <h1>{score}</h1>
      <h1>{flag ? "yes" : "no"}</h1>
      <button onClick={handleClick}> Event Handler </button>
      <button onClick={handleAsyncClick}> Async Handler </button>
      <button onClick={handleTimeOutClick}> Timeout Handler </button>
    </div>
  );
};

export default AutomaticBatching;
