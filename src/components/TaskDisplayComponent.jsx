import React, { useContext } from "react";
import TaskData from "./TaskData";
import { ThemeContext } from "../contextAPI/ThemeContext";

const TaskDisplayComponent = ({ tasks, deleteTask }) => {

  const {theme, toogleTheme}= useContext(ThemeContext);

  return (
    <div className=" p-2  rounded-sm min-h-[100px]">
      {tasks.length == 0 ? (
        <div className="flex flex-col border bg-gray-100 h-full rounded-sm border-gray-300 justify-center items-center font-semibold text-gray-500">
          <h1 className="text-5xl  ">No Task!</h1>
          <h1 className="font-light">Add a new Task </h1>
        </div>
      ) : (
        <div>
          <h1 className={`text-xl font-semibold text-left my-1  ${theme==='dark'?"text-blue-500":"text-gray-800"} `}>
            Tasks
          </h1>
          {tasks?.map((item, index) => {
            return <TaskData key={index} task={item} deleteTask={deleteTask} />;
          })}
        </div>
      )}
    </div>
  );
};

export default TaskDisplayComponent;
