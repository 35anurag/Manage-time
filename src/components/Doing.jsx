import React, { useContext, useEffect } from "react";
import { newTaskContext } from "../contextHook/Context";

import Subtask from "./Subtask";

const Doing = () => {
  const { newTaskContents } = useContext(newTaskContext);

  const doingArray = newTaskContents.filter((task) => task.isDoing);
  useEffect(()=>{
    console.log(doingArray)
  })

  return (
    <div>
      <div className="w-[200px] max-w-[200px]">
        <div className="font-medium tracking-wider text-gray-500 text-xs flex flex-row items-center gap-x-2 ml-[4rem]">
          <p className="w-3 h-3 rounded-full bg-[#03DAC6]"></p>
          <p>Doing({doingArray.length})</p>
        </div>
        <div>
          <Subtask newContents={doingArray} todo={false} doing={true} completed={false} />
        </div>
      </div>
    </div>
  );
};

export default Doing;
