import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrese = () => {
    setCount(count + 1);
  };

  const handleDecrese = () => {
    if (count <= 0) {
      alert("Maximum limit reached!");
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className=" flex gap-2 justify-center pt-10">
      <button
        onClick={handleIncrese}
        className=" bg-red-200 p-3 rounded-md text-5xl">
        +
      </button>
      <span className=" text-5xl py-2">{count}</span>
      <button
        onClick={handleDecrese}
        className=" bg-red-200 p-3 rounded-md text-5xl">
        -
      </button>
    </div>
  );
};

export default Counter;
