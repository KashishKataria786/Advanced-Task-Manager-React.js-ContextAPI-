import React, { useContext, useEffect, useState } from "react";
import TaskData from "./TaskData";
import { ThemeContext } from "../contextAPI/ThemeContext";
import { TaskContext } from "../contextAPI/TaskContext";

const TaskDisplayComponent = () => {

  const {theme}= useContext(ThemeContext);
  const {tasks} = useContext(TaskContext);
  const [filterTask, setFilteredTask]= useState("all");

  const handleFilterChange = (e) => {
    setFilteredTask(e.target.value);
  };

  const filteredTask = tasks.filter((task)=>{
    if (filterTask === 'complete'){console.log("task in complete ",task); return task.completed;}
    if (filterTask === 'incomplete') return !task.completed;
    if (filterTask === 'all') return task;
  })
  return (
    <>
 
    <div className=" p-2  rounded-sm min-h-[100px] text-left">
     
      {tasks.length == 0 ? (
        <div className="flex flex-col border bg-gray-100 h-full rounded-sm border-gray-300 justify-center items-center font-semibold text-gray-500">
          <h1 className="text-5xl  ">No Task!</h1>
          <h1 className="font-light">Add a new Task </h1>
        </div>
      ) : (
        <div>
           <div>
      <select
        value={filterTask}
        onChange={handleFilterChange}
        className="mb-4 border rounded px-3 text-white py-2 text-left"
      >
        <option className="text-gray-800" value="all">All</option>
        <option className="text-gray-800" value="complete">Complete</option>
        <option className="text-gray-800" value="incomplete">Incomplete</option>
      </select>
      </div>
          <h1 className={`text-xl font-semibold text-left my-1  ${theme==='dark'?"text-blue-500":"text-gray-800"} `}>
            {filterTask.toLocaleUpperCase()} Tasks
          </h1>
          {filteredTask?.map((item, index) => {
            return <TaskData key={index} task={item} />;
          })}
        </div>
      )}
    </div>
    </>
  );
};

export default TaskDisplayComponent;
