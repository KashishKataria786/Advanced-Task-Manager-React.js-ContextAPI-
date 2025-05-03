import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";
const TaskData = ({ task, deleteTask }) => {
    const [task_complete,setTask_complete]= useState(task.completed);
  return (
    <div className="mb-2 shadow-sm flex justify-between items-start p-2 border bg-white border-gray-200 rounded-md">
      <div className="text-left">
        <h1 className="text-blue-400">{task.title}</h1>
        <p className="text-gray-700">{task.description}</p>
        
      </div>
      <div className="flex gap-2 items-center">
      <button onClick={() => deleteTask(task.id)}>
        <MdDeleteForever size={30} color="red" />
      </button>

      </div>
    </div>
  );
};

export default TaskData;
