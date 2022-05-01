import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const toggleLight = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>I was clicked {count} times</button>
      <h2> Toggle Light </h2>
      <img
        src={
          isOn
            ? "https://icon-library.com/images/highlights-icon/highlights-icon-27.jpg"
            : "https://icon-library.com/images/9d33aedf9c_62030.png"
        }
        style={{
          height: "150px",
          width: "150px",
        }}
        alt="FlashLight"
        onClick={toggleLight}
      />
    </>
  );
};

export default App;
