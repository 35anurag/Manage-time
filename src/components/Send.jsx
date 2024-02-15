import React, { useContext } from "react";
import { newTaskContext } from "../contextHook/Context";

const Send = ({ index,showSend, setShowSend, newContents }) => {
  const { newTaskContents, setNewTaskContents } = useContext(newTaskContext);

  const handleDoing = () => {
    // if (!newTaskContents[index].isDoing) {
      const updatedNewTaskContents = newTaskContents.map((task, i) =>
        i === index
          ? { ...task, isTodo: false, isDoing: true, isCompleted: false }
          : task
      );
      setNewTaskContents(updatedNewTaskContents);
    // }
    // const updatedShowSend = [...showSend];
    // updatedShowSend[index] = !updatedShowSend[index];
    // setShowSend(updatedShowSend);
  };

  const handleCompleted = () => {
    // if (!newTaskContents[index].isCompleted) {
      const updatedNewTaskContents = newTaskContents.map((task, i) =>
        i === index
          ? { ...task, isTodo: false, isDoing: false, isCompleted: true }
          : task
      );
      setNewTaskContents(updatedNewTaskContents);
    // }
    // const updatedShowSend = [...showSend];
    // updatedShowSend[index] = !updatedShowSend[index];
    // setShowSend(updatedShowSend);
  };
  return (
    <div>
      <div className="mt-[15px] ">
        <div className="w-[100px] h-auto bg-secondary rounded-[5px] flex items-center justify-center">
          <div className="text-xs text-gray-200 flex flex-col items-center gap-2">
            <button
              onClick={handleDoing}
              className="w-[100px] h-auto hover:bg-slate-800 p-2 rounded-[5px] flex flex-row gap-x-2 items-center justify-center"
            >
              <p className="w-2 h-2 rounded-full bg-[#03DAC6]" />
              <p>Doing</p>
            </button>
            <p className="w-[80px] border border-slate-600 rounded-full"></p>
            <button
              onClick={handleCompleted}
              className="w-[100px] h-auto hover:bg-slate-800 p-2 rounded-[5px] flex flex-row gap-x-2 items-center justify-center"
            >
              <p className="w-2 h-2 rounded-full bg-[#C38FFF]" />
              <p>Completed</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Send;
