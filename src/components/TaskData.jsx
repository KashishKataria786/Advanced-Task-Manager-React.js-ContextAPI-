import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contextAPI/ThemeContext.jsx";
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneCircle ,IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { TaskContext } from "../contextAPI/TaskContext.jsx";


const TaskData = ({ task}) => {

  const { theme} = useContext(ThemeContext);
  const {deleteTask, taskComplete}= useContext(TaskContext);
  return (
    <div
      className={`mb-2 border-l-3 ${task.completed ? "opacity-80  border-l-green-500" : ""} shadow-sm flex justify-between items-start p-2 border  border-gray-200  rounded-md ${
        theme === "dark" ? "bg-gray-800 text-gray-200 border-gray-600" : ""
      }`}
    >
      <div className="text-left">
        <h1 className="text-blue-400">{task.title}</h1>
        <p className="">{task.description}</p>
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={()=>deleteTask(task.id)}>
          <MdDeleteForever size={30} color="red" />
        </button>
        <button onClick={()=>taskComplete(task.id)}>{task.completed?<IoCheckmarkDoneCircle size={30} color="green"/>:<IoCheckmarkDoneCircleOutline size={30} color="gray"/>}</button>
      </div>
    </div>
  );
};

export default TaskData;
