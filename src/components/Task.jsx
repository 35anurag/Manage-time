import React, { useContext } from "react";

import { newTaskContext } from "../contextHook/Context";

import Subtask from "./Subtask";
import Doing from "./Doing";
import Completed from "./Completed";
import Todo from "./Todo";

const Task = () => {
  const { toggles, newTaskContents } = useContext(newTaskContext);

  return (
    <div
      className={`${
        toggles === "dark" ? "bg-primary" : "bg-red-500"
      } text-white min-h-screen ml-[220px] relative`}
    >
      <div className="p-6 flex flex-row justify-between mx-5">
        <Todo />

        <p className="w-[1px] h-[40rem] ml-[3rem] gap-y-2 bg-slate-700 rounded-all"></p>

        <Doing />

        <div className="w-[1px] h-[40rem] gap-y-2 bg-slate-700 rounded-all"></div>

        <Completed />
      </div>
    </div>
  );
};

export default Task;
