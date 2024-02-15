import React, { useContext, useEffect } from "react";
import { newTaskContext } from "../contextHook/Context";
import Subtask from "./Subtask";

const Todo = () => {
  const { newTaskContents } = useContext(newTaskContext);
  const todoArray = newTaskContents.filter((task) => task.isTodo);
  
  return (
    <div className="max-w-[200px]">
      <div className="font-medium tracking-wider text-gray-500 text-xs flex flex-row gap-x-2  ml-[4rem]">
        <p className="w-3 h-3 rounded-full bg-amber-300"></p>
        <p>TODO({todoArray.length})</p>
      </div>
      {/* {todoArray.length === 0? <div><div>
          <div className="flex flex-row">
            <div className="my-4 bg-secondary max-w-[200px] w-[15rem] h-[5rem] rounded-lg flex flex-row justify-between p-3">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-gray-300">
                  <p>Add your title</p>
                </p>
                <p className="text-xs text-gray-400"> 0 subtasks</p>

                {clicked ? (
                  <button onClick={handleDefault} className="text-left">
                    <KeyboardArrowUpRoundedIcon className="w-[20px] h-[20px]" />
                  </button>
                ) : (
                  <button onClick={handleDefault} className="text-left">
                    <KeyboardArrowDownRoundedIcon className="w-[20px] h-[20px]" />
                  </button>
                )}
              </div>
            </div>
          </div>
          {isDetail && <Detail />}
        </div>

      </div>:<div> */}
      <Subtask todo={true} doing={false} completed={false} newContents={todoArray} />
        {/* </div>} */}
      {/* <Subtask todo={true} doing={false} completed={false} /> */}
    </div>
  );
};

export default Todo;
