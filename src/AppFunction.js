import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [count]);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
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

      <h2>Mouse Position</h2>
      {JSON.stringify(mousePosition, null, 2)}
    </>
  );
};

export default App;
