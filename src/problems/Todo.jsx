import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (input.trim().length !== 0) {
      setItems([...items, input]);
      toast.success("added successfully!");
      setInput("");
    } else {
      toast.error("Please type something");
    }
  };

  const handleDelete = (index) => {
    const updateItems = items.filter((_, i) => i !== index);
    setItems(updateItems);
    toast.error("Deleted successfully");
  };

  return (
    <div>
      <h1 className=" text-3xl font-bold text-center pt-5">Todo list</h1>
      <hr />
      <div className=" flex mx-auto justify-center my-3">
        <input
          onChange={(e) => setInput(e.target.value)}
          className="input mr-2"
          type="text"
          value={input}
          required
          placeholder="Enter item"
        />
        <button onClick={handleAdd} className=" btn bg-blue-500 text-white  ">
          ADD
        </button>
      </div>
      <div className=" flex flex-col gap-3 text-start  mx-auto items-center">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-start">
              <li className=" list-none text-3xl font-bold">
                {index + 1}.{item}
              </li>
              <button
                onClick={() => handleDelete(index)}
                className=" bg-red-400 p-1 rounded-md text-white">
                Remove
              </button>
            </div>
          ))
        ) : (
          <div>
            <h1>The list is empty !</h1>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Todo;
