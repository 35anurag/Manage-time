import React, { useState, useEffect, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Task from "./Task";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import EditRoadIcon from "@mui/icons-material/EditRoad";
import AddIcon from "@mui/icons-material/Add";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import {newTaskContext} from '../contextHook/Context';


const Sidebar = () => {
  const [showBoard, setShowBoard] = useState(false);
  const [task, setTask] = useState("");
  let [arrTask, setArraytask] = useState([]);
  // const [toggle, setToggle] = useState("dark");

  const {toggles,setToggles}=useContext(newTaskContext);

  const handleToggle = (e) => {
    if (toggles === "light") {
      setToggles("dark");
    } else {
      setToggles("light");
    }
  };

  const handleClick = () => {
    setShowBoard(true);
  };

  const handleDel = (deletedTask) => {
    let updatedTask = arrTask.filter((task) => task !== deletedTask);
    setArraytask(updatedTask);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    if (!task) {
      return;
    }
    setArraytask([...arrTask, task]);
    setTask("");
    setShowBoard(false);
  };


  const bgColor =
  toggles === "dark"
      ? "bg-secondary text-white"
      : "bg-gray-200 text-secondary";

  return (
    <div className="flex">
      <div
        className={`pt-[2rem] min-w-[220px] border-r ${bgColor} border-gray-600 
       min-h-screen fixed  text-center flex flex-col justify-between`}
      >
        <div>
          <h1 className="text-2xl font-bold ">
            <AssignmentIcon className="w-9 h-auto text-blue-500" />
            Manage
          </h1>
          <div className="mt-[2rem] flex flex-col gap-y-3 justify-center items-start text-[14px] font-medium">
            <p className="text-xs font-light tracking-widest pl-5">
              All Board ({arrTask.length + 1})
            </p>
            <ul className="flex flex-col gap-4">
              <li>
                <button className="bg-blue-900 p-2 pl-4 pr-6 max-w-[200px] w-[200px] rounded-tr-3xl rounded-br-3xl flex flex-row gap-2">
                  <AppRegistrationIcon />
                  <span>Platform Launch</span>
                </button>
              </li>
              <li>
                <button className="p-2 pl-4 pr-6 max-w-[200px] w-[200px] flex flex-row gap-2 hover:bg-blue-900 rounded-tr-3xl rounded-br-3xl">
                  <EditRoadIcon />
                  <span>Roadmap</span>
                </button>
              </li>
              {arrTask.map((task) => (
                <li key={task}>
                  <button className="p-2 pl-4 pr-6 max-w-[200px] w-[200px] flex flex-row justify-between gap-2 hover:bg-blue-900 rounded-tr-3xl rounded-br-3xl group">
                    <div className="flex flex-row gap-2">
                      <EditRoadIcon />
                      <span className="capitalize">{task}</span>
                    </div>
                    <button onClick={() => handleDel(task)}>
                      <CloseRoundedIcon className="opacity-0 group-hover:opacity-100 w-4 h-4" />
                    </button>
                  </button>
                </li>
              ))}
            </ul>

            {showBoard && (
              <div className="pl-4 pr-6 flex flex-row bg-gray-700 rounded-full">
                <input
                  className="bg-gray-700 p-2 pl-1 w-[110px] rounded-full outline-none"
                  type="text"
                  onChange={handleChange}
                  value={task}
                />
                <button
                  type="button"
                  onClick={handleSubmit}
                  className=" bg-blue-800 rounded-full w-[45px] h-10 mr-[-10px]"
                >
                  <AddIcon className="w-5 h-5 " />
                </button>
              </div>
            )}
            <button className="pl-3 text-blue-500" onClick={handleClick}>
              <AddIcon /> Create New Board
            </button>
          </div>
        </div>
        <div className="text-xs mb-3 flex flex-col gap-2 text-gray-400">
          <div className="flex flex-row items-center justify-between bg-slate-600 p-2 ml-7 mr-7 rounded-3xl">
            <div>
              <DarkModeIcon className={`w-4 h-auto ${
                  toggles === "dark" ? "text-white" : ""
                }`} />
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                value=""
                class="sr-only peer"
                onChange={(e) => handleToggle(e)}
              />
              {/* <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> */}
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
              {/* <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Toggle me
              </span> */}
            </label>
            <div>
              <LightModeIcon
                className={`w-4 h-auto ${
                  bgColor === "light" ? "text-white" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar  />
        <Task />
      </div>
    </div>
  );
};

export default Sidebar;


