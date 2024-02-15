import React, { useContext, useState } from "react";
import NewTask from "../pages/NewTask";

import AddIcon from "@mui/icons-material/Add";

import { newTaskContext } from "../contextHook/Context";

const Navbar = ({ toggle }) => {
  const [newTask, setNewTask] = useState(false);

  const { toggles, setTaskArray, taskArray, setIsTask} = useContext(newTaskContext);

  const handleTask = () => {
    // setTaskArray([...taskArray, newTask]);
    setIsTask(true);
    setNewTask(true);
  };

  const bgColor = toggles === "dark" ? "bg-secondary" : "bg-red-500";
  return (
    <div>
      <div className="min-w-[1044px] ml-[217px] text-white">
        <div className={`border-b border-gray-600 ${bgColor}`}>
          <div className="flex flex-row ">
            <div className="container flex flex-row justify-between my-[1.5rem] items-center">
              <h1 className="font-medium text-lg">Platform Launch</h1>
              <div>
                <button
                  className="text-xs font-medium bg-blue-700 p-3 rounded-3xl flex flex-row items-center justify-center gap-1 hover:bg-blue-900"
                  onClick={handleTask}
                >
                  <AddIcon className="w-4 h-auto" /> <span>Add New Tasks</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {newTask && <NewTask setNewTask={setNewTask} toggle={toggle} />}
    </div>
  );
};

export default Navbar;
