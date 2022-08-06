import { useState, useEffect, useRef } from "react";
export const Timer = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && toggle) {
      return;
    } else if (ref.current && !toggle) {
      clearInterval(ref.current);
      ref.current = null;
      return;
    } else if (ref.current == null && toggle) {
      clearInterval(ref.current);
      handleCount();
      return;
    }
    handleCount();
  }, [toggle]);
  const handleCount = () => {
    ref.current = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);
  };
  const handleStartPause = () => {
    setToggle(!toggle);
  };
  const handleReset = () => {
    clearInterval(ref.current);
    setCount(0);
    handleCount();
  };
  return (
    <div>
      <h1 className="text-danger">{count}</h1>
      <button className="btn btn-primary" onClick={handleStartPause}>
        {toggle ? "Stop" : "Start"}
      </button>
      <button className="btn btn-danger ms-2" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};
