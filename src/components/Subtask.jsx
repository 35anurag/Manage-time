import React, { useState, useContext, useEffect } from "react";

import Detail from "./Detail";
import { newTaskContext } from "../contextHook/Context";
import Send from "./Send";

import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

const Subtask = ({newContents, todo, doing, completed,  }) => {
  const { setNewTaskContents, newTaskContents } = useContext(newTaskContext);

  const [isDetail, setIsDetail] = useState(false);
  const [clicked, setClicked] = useState(false);

  const [showDetail, setShowDetail] = useState(
    newTaskContents.map(() => false)
  );
  const [isClicked, setIsClicked] = useState(newTaskContents.map(() => false));
  const [showSend, setShowSend] = useState(newTaskContents.map(() => false));

  const handleDefault = () => {
    setIsDetail(!isDetail);
    setClicked(!clicked);
  };

  const handleDetail = (index) => {
    const updatedShowDetail = [...showDetail];
    updatedShowDetail[index] = !updatedShowDetail[index];
    setShowDetail(updatedShowDetail);

    const updatedIsClicked = [...isClicked];
    updatedIsClicked[index] = !updatedIsClicked[index];
    setIsClicked(updatedIsClicked);
  };

  const handleSend = (index) => {
    if (!newTaskContents[index].isDoing && !newTaskContents[index].isCompleted) {
      const updatedShowSend = [...showSend];
      updatedShowSend[index] = !updatedShowSend[index];
      setShowSend(updatedShowSend);
    }
  };

  const handleDelete = (array) => {
    const updatedTask = newTaskContents.filter((arr) => arr !== array);
    setNewTaskContents(updatedTask);
  };

  // useEffect(()=>{
  //   console.log(newTaskContents)
  // })

  return (
    <div>
      {newTaskContents.length === 0 ? (
        <div>
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
      ) : (
        <div>
          {newContents
            .filter(
              (task) =>
                task.isDoing === doing &&
                task.isCompleted === completed &&
                task.isTodo === todo
            )
            .map((array, index) => (
              <div>
                <div key={index} className="flex flex-row gap-3">
                  <div className=" mt-4 mb-2 bg-secondary w-[200px] min-w-[200px] h-[5rem] rounded-lg flex flex-row justify-between p-3">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm text-gray-300">
                        <p>{array.title}</p>
                      </p>
                      <p className="text-xs text-gray-400">
                        {array.taskArray.subTaskArray.length} subtasks
                      </p>

                      {isClicked[index] ? (
                        <button
                          onClick={() => handleDetail(index)}
                          className="text-left"
                        >
                          <KeyboardArrowUpRoundedIcon className="w-[20px] h-[20px]" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handleDetail(index)}
                          className="text-left"
                        >
                          <KeyboardArrowDownRoundedIcon className="w-[20px] h-[20px]" />
                        </button>
                      )}
                    </div>

                    <div className="text-gray-300 flex flex-col gap-1">
                      <button onClick={() => handleDelete(array)}>
                        <DeleteIcon className="w-[14px] h-[14px]" />
                      </button>

                      {!completed && (
                        <button onClick={() => handleSend(index)}>
                          <SendIcon className="w-[14px] h-[14px]" />
                        </button>
                      )}
                    </div>
                  </div>

                  {showSend[index] && (
                    <Send index={index} showSend={showSend} setShowSend={setShowSend} newContents={newContents} />
                  )}
                </div>
                {showDetail[index] ? (
                  <Detail
                    key={index}
                    title={array.title}
                    desc={array.desc}
                    taskArray={array.taskArray}
                  />
                ) : (
                  ""
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Subtask;
