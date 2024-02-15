import React, { createContext, useState } from "react";

export const newTaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  // const [titles, setTitles] = useState("");
  // const [descs, setDescs] = useState("");
  // const [subTaskArray, setSubTaskArray] = useState([]);
  const [storeSubTaskArray, setStoreSubTaskArray] = useState([]);
  const [isTask, setIsTask] = useState(false);
  const [taskArray, setTaskArray] = useState([]);
  const [storeTaskArray, setStoreTaskArray] = useState([]);
  const [storeTaskContent, setStoreTaskContent] = useState([]);

  const [newTaskContents, setNewTaskContents] = useState([]);

  const [toggles, setToggles] = useState("dark");

  return (
    <newTaskContext.Provider
      value={{
        // titles,
        // setTitles,
        // descs,
        // setDescs,
        storeSubTaskArray,
        setStoreSubTaskArray,
        newTaskContents,
        setNewTaskContents,
        toggles,
        setToggles,
        // subTaskArray,
        // setSubTaskArray,
        isTask,
        setIsTask,
        setTaskArray,
        taskArray,
        storeTaskArray,
        setStoreTaskArray,
        storeTaskContent,
        setStoreTaskContent,
      }}
    >
      {children}
    </newTaskContext.Provider>
  );
};

export default TaskContextProvider;
