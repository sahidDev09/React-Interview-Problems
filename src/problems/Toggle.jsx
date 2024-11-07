import { useState } from "react";
import { MdOutlineFlashlightOff, MdOutlineFlashlightOn } from "react-icons/md";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center">Problem 5</h1>
      <hr className=" border border-gray-300 my-3" />
      <div className="  w-fit flex mx-auto mt-5">
        {toggle ? (
          <MdOutlineFlashlightOn className=" text-7xl" />
        ) : (
          <MdOutlineFlashlightOff className=" text-7xl" />
        )}
      </div>
      <button
        onClick={handleToggle}
        className="btn btn-primary flex mx-auto mt-4">
        {toggle ? "Turn OFF" : "Turn ON"}
      </button>
    </div>
  );
};

export default Toggle;
