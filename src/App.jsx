import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskDisplayComponent from './components/TaskDisplayComponent';
import { ThemeContext } from './contextAPI/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
function App() {

  const {theme, toggleTheme}= useContext(ThemeContext);
  const [tasks, setTasks] = useState(() => {


    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

    const addTask = () => {
      if (!title || !description) return;

      const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
      };

      const updatedTasks = [...tasks, newTask];
      setTasks(updatedTasks);
      setTitle('');
      setDescription('');
      toast("Task Added Successfully")
    };

    const deleteTask = (id)=>{
      setTasks(tasks.filter((task)=>task.id != id));
      toast("Task Deleted Successfully");
    }

    const taskComplete = (id)=>{

      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === id ? { ...task, completed: !task.completed } : task
        )
      ) 
    }

    
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);  

  return (
    <>
    <ToastContainer/>
    <div className='fixed top-0 left-0 p-3 '>
    <button
      onClick={toggleTheme}
      className={`p-2  font-semibold   rounded bg-gray-200 ${theme==='dark'?"text-white bg-gray-800" :""} text-black dark:e`}
    >
      {theme === 'dark' ? 'Light' : 'Dark'} Mode
    </button>
    </div>
    
    <h1 className="my-5 mdtext-2xl md:text-5xl text-blue-600 font-semibold">Advanced Task Manager</h1>
    <div className={`w-full border p-3 md:grid grid-cols-2 gap-1 shadow ${theme=='dark'? "bg-gray-800 text-gray-100 ":"bg-white  border-gray-100"}`}>
      <div>
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
          onClick={addTask}
          className="bg-blue-600 border border-blue-600 p-2 rounded-full text-white hover:bg-white hover:text-blue-600"
        >
          Add Task!
        </button>
      </div>
      </div>

      <TaskDisplayComponent tasks={tasks} deleteTask={deleteTask} taskComplete={taskComplete}/>
      </div>
    </>
  );
}

export default App;
