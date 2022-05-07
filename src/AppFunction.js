import React, { useEffect, useState } from "react";

const initialLocationState = {
  longitude: null,
  latitude: null,
  speed: null,
};

const App = () => {
  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });
  const [status, setStatus] = useState(navigator.onLine);
  const [{ latitude, longitude, speed }, setLocation] =
    useState(initialLocationState);
  let mounted = true;

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    };
  }, [count]);

  const handleOnline = () => {
    setStatus(true);
  };

  const handleGeolocation = (event) => {
    if (mounted)
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed,
      });
  };

  const handleOffline = () => {
    setStatus(false);
  };

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

      <h2>NetWork Status: </h2>
      <p>
        {" "}
        You are <strong>{status ? "Online" : "Offline"}</strong>{" "}
      </p>

      <h2>Geolocation</h2>
      <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p>
      <p>Your Speed is: {speed ? speed : 0}</p>
    </>
  );
};

export default App;
