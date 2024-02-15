import React, { useContext, useEffect } from "react";
import { newTaskContext } from "../contextHook/Context";

import Subtask from "./Subtask";

const Completed = () => {
  const { newTaskContents } = useContext(newTaskContext);

  const completedArray = newTaskContents.filter((task) => task.isCompleted);
  return (
    <div className="w-[200px] max-w-[200px]">
      <div className="font-medium tracking-wider text-gray-500 text-xs flex flex-row items-center gap-x-2  ml-[4rem]">
        <p className="w-3 h-3 rounded-full bg-[#C38FFF]"></p>
        <p>Completed({completedArray.length})</p>
      </div>
      <div>
        <Subtask todo={false} doing={false} completed={true} newContents={completedArray} />
      </div>
    </div>
  );
};

export default Completed;
