import React, { useState } from "react";

import DoneRoundedIcon from "@mui/icons-material/DoneRounded";

const Detail = ({ title, desc, taskArray }) => {

  const display = taskArray && taskArray.subTaskArray;

  const [isChecked, setIsChecked] = useState(display && taskArray.subTaskArray.map(()=> false));

  const showChecked = (index) => {
    const updatedChecked = [...isChecked]
    updatedChecked[index] = !updatedChecked[index]
    setIsChecked(updatedChecked);
  };

  return (
    <div>
      <div className="bg-blue-950 w-[200px] max-w-[200px] h-auto rounded-lg hover:shadow-task">
        <div className="text-black p-4 flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-[14px] text-amber-200 ">Title</p>
            <p className="text-[13px] text-white break-words">
              {title ? title : "Your title"}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="text-[14px] text-amber-200">Description</p>
            <p className="text-[13px] text-white break-words">
              {desc ? desc : "Your description"}
            </p>
          </div>

          {display ? (
            <div className="flex flex-col">
              <p className="text-[14px] text-amber-200">Subtasks</p>
              {taskArray.subTaskArray.map((array, index) => (
                <ul key={index}>
                  <li className="text-white flex flex-row items-center justify-between">
                    {isChecked[index] ? (
                      <div className="text-[13px] break-words line-through text-gray-300">
                        {array}
                      </div>
                    ) : (
                      <div className="text-[13px] break-words">{array}</div>
                    )}
                    {array && (
                      <button onClick={() => showChecked(index)}>
                        <DoneRoundedIcon className="w-5 h-5" />
                      </button>
                    )}
                  </li>
                </ul>
              ))}
            </div>
          ) : (
            <div>
              <p className="text-[14px] text-amber-200">Subtasks</p>
              <p className="text-[13px] text-white">
                Your Subtasks
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Detail;
