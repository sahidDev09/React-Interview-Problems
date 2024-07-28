import { useState } from "react";

const UserInputRealtime = () => {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e) => {
    if (userInput.length === 10) {
      return alert("Maximum limit reached!");
    }
    setUserInput(e.target.value);
  };

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center pt-2">Problem 3</h1>
      <form onChange={handleInput} className=" text-2xl flex gap-2">
        <label htmlFor="">Text</label>
        <input
          type="text"
          placeholder=" Write someting"
          className=" rounded-md text-md"
        />
      </form>
      <p>
        Display Input:{" "}
        <span className=" text-3xl font-bold text-red-400">{userInput}</span>
      </p>
    </div>
  );
};

export default UserInputRealtime;
