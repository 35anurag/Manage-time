import React, { useState, useContext, useEffect } from "react";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

import { newTaskContext } from "../contextHook/Context";

const NewTask = (props) => {
  const [newSubTask, setNewSubTask] = useState(true);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [subTask, setSubTask] = useState("");
  const [subTaskArray, setSubTaskArray] = useState([]);

  const [error, setError] = useState("");

  const {
    setNewTaskContents,
    newTaskContents,
    toggles,
    setIsTask,
    setStoreTaskArray,
    storeTaskArray,
    taskArray,
  } = useContext(newTaskContext);

  const handleClick = () => {
    setNewSubTask(true);
  };

  const handleTitle = (e) => {
    setError("");
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setError("");
    setDesc(e.target.value);
  };

  const handleChange = (e) => {
    setSubTask(e.target.value);
  };

  const handleSubmit = () => {
    if (!subTask) {
      return;
    }
    setSubTaskArray([...subTaskArray, subTask]);
    setSubTask("");
    setNewSubTask(!newSubTask);
  };

  const handleDel = (deletedTask) => {
    let updatedTask = subTaskArray.filter((subTask) => subTask !== deletedTask);
    setSubTask("");
    setSubTaskArray(updatedTask);
    setNewSubTask(false);
  };

  const handleCreateTask = () => {
    if (title.length === 0 || desc.length === 0) {
      setError("Title or Description is empty");
      return;
    }

    const newObject = {
      title: title,
      desc: desc,
      isTodo: true,
      isDoing: false,
      isCompleted: false,
      taskArray: {
        subTaskArray: subTaskArray,
      },
    };
    setNewTaskContents((prevTaskContent) => [...prevTaskContent, newObject]);
    props.setNewTask(false);
  };

  return (
    <div>
      <div className="z-10 text-white flex items-center justify-center background-blur-md bg-black bg-opacity-30 inset-0 fixed">
        <div
          className={`w-[350px] h-auto ${
            toggles === "dark" ? "bg-secondary" : " bg-red-300"
          }  rounded-lg`}
        >
          <div className="p-6">
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-sm font-medium">Add New Task</h1>
              <button
                onClick={() => {
                  props.setNewTask(false);
                }}
              >
                <CloseRoundedIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1 my-5">
              <div className="">
                <label
                  for="myInput"
                  className="absolute text-xs tracking-wider ml-3 mt-[-12px] bg-secondary p-1 font-medium"
                >
                  Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Take coffee break"
                  onChange={handleTitle}
                  value={title}
                  id="myInput"
                  className="p-[10px] rounded-sm text-gray-300 bg-secondary border border-gray-500 w-[300px] text-[12px] outline-none"
                />
              </div>

              <div className="my-5">
                <div className="">
                  <label
                    for="my-input"
                    className="absolute text-xs tracking-wider ml-3 mt-[-12px] bg-secondary p-1 font-medium"
                  >
                    Description
                  </label>

                  <textarea
                    type="text"
                    placeholder="e.g It's always good to take a break. This will make your mind fresh"
                    onChange={handleDescription}
                    value={desc}
                    id="my-input"
                    className="p-[10px] rounded-sm text-gray-300 bg-secondary border border-gray-500 w-[300px] max-w-[300px] h-[100px] text-[12px] outline-none"
                  />
                </div>
                {error && (
                  <p className="text-red-500 mt-3 text-xs text-center">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-row justify-between items-center ">
                  <p className="text-xs tracking-wider font-medium mb-2">
                    Subtasks
                  </p>
                  <button
                    className="text-xs bg-blue-900 p-2 rounded-xl font-medium"
                    onClick={handleClick}
                  >
                    Add New Subtasks
                  </button>
                </div>
                <div className="flex flex-col gap-3">
                  <ul className="flex flex-col gap-3">
                    {subTaskArray.map((board) => (
                      <li key={board}>
                        <div className="flex flex-row items-center gap-1">
                          <div className="p-[10px] rounded-sm text-gray-300 bg-gray-700 border border-gray-500 w-[300px] text-[12px]">
                            {board}
                          </div>

                          <button onClick={() => handleDel(board)}>
                            <DeleteRoundedIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {newSubTask && (
                    <div className="flex flex-row items-center gap-1">
                      <input
                        type="text"
                        placeholder="e.g. Take coffee break"
                        onChange={handleChange}
                        value={subTask}
                        className="p-[10px] rounded-sm text-gray-400 bg-secondary border border-gray-500 w-[300px] text-[12px] outline-none"
                      />
                      <div className="flex flex-row gap-2">
                        <button onClick={handleSubmit}>
                          <DoneRoundedIcon className="w-5 h-5" />
                        </button>
                        <button onClick={() => handleDel(subTask)}>
                          <CloseRoundedIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button
                className="text-sm mt-8 bg-white text-blue-900 p-2 rounded-xl font-medium"
                onClick={handleCreateTask}
              >
                Create Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewTask;
