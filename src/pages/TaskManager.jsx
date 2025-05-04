import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import './App.css';
import TaskDisplayComponent from '../components/TaskDisplayComponent.jsx';
import { ThemeContext } from '../contextAPI/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import { TaskContext } from '../contextAPI/TaskContext';
import Layout from '../components/Layout/Layout.jsx';

function TaskManager() {

  const {theme, toggleTheme}= useContext(ThemeContext);
  const {tasks, addTask}= useContext(TaskContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const handleSubmit = (e) => {
    if (title && description) {
      addTask({ title, description });
      setTitle('');
      setDescription('');
    }else{
      toast("Dont leave empty Credentials");
      return;
    }
  };


  return (
    <Layout>
    <ToastContainer/>
    <div className={`w-full rounded-xl border p-3 md:grid grid-cols-2 gap-1 shadow ${theme=='dark'? "bg-gray-800 text-gray-100 ":"bg-white  border-gray-100"}`}>
      <div>
      <h1 className=" text-2xl md:text-3xl text-left pl-3 text-blue-600 font-semibold">Advanced Task Manager</h1>
   
      <div className={` flex flex-col gap-3 m-4 rounded-sm px-3 py-5 border ${theme==='dark'?"border-gray-600":"border-gray-200"} shadow-sm`}>
        <h5 className={`text-left text-2xl font-semibold ${theme ==='dark' ? "text-blue-500":"text-black"}`}>Add a New Task</h5>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`p-2 border  text-blue-500 ${theme ==='dark' ? "border-gray-600":"border-gray-200  "}`}
          placeholder="Add Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={`p-2 border  text-blue-500 ${theme ==='dark' ? "border-gray-600":"border-gray-200  "}`}
          placeholder="Add Description"
          rows="7"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-600 border border-blue-600 p-2 rounded-full text-white hover:bg-white hover:text-blue-600"
        >
          Add Task!
        </button>
      </div>
      </div>

      <TaskDisplayComponent tasks={tasks} />
      </div>  

    </Layout>
  );
}

export default TaskManager;
