/* eslint-disable no-unused-vars */
import Counter from "./problems/Counter";
import Fetch from "./problems/Fetch/Fetch";

import List from "./problems/List";
import OneHW from "./problems/OneHW";
import Timer from "./problems/Timer";
import Todo from "./problems/Todo";
import Toggle from "./problems/Toggle";
import UserInputRealtime from "./problems/UserInputRealtime";

function App() {
  return (
    <>
      <div className=" bg-slate-200 min-h-screen">
        <div className="content container mx-auto">
          {/* <OneHW />
          <Counter /> */}
          {/* <UserInputRealtime /> */}
          {/* <List/> */}
          {/* <Toggle /> */}
          {/* <Fetch /> */}
          {/* <Timer /> */}
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
