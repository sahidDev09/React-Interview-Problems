import { useEffect, useState } from "react";

const Timer = () => {
  const [curTime, setCurTime] = useState(60);

  useEffect(() => {
    if (curTime > 0) {
      const timer = setTimeout(() => setCurTime(curTime - 1), 1000);

      return () => clearTimeout(timer);
    }
  }, [curTime]);

  return (
    <div className=" text-4xl flex items-center justify-center pt-10">
      <h1>Time left: {curTime} </h1>
    </div>
  );
};

export default Timer;
