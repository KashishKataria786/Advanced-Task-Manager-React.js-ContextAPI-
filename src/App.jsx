import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTheme } from './custom-hooks/useTheme.jsx';
import './App.css';
import TaskDisplayComponent from './components/TaskDisplayComponent';

function App() {

  // const {theme , toggleTheme}= useTheme();

  const [tasks, setTasks] = useState(() => {
    // Load tasks from localStorage on first render
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
  };

  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id != id));
  }

  // Sync tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
    <div className='bg-white border border-gray-100 shadow  p-3 grid grid-cols-2 gap-1 '>
      <div>
      <h1 className="text-5xl dark:text-xl text-blue-600 font-semibold">Advanced Task Manager</h1>
      <div className=" flex flex-col gap-3 m-4 rounded-sm px-3 py-5 border border-gray-100 shadow-sm">
        <h5 className="text-left font-semibold">Add a New Task</h5>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border border-gray-200"
          placeholder="Add Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-2 border border-gray-200"
          placeholder="Add Description"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 border border-blue-600 p-2 rounded-full text-white hover:bg-white hover:text-blue-600"
        >
          Add Task!
        </button>
      </div>
      </div>

      <TaskDisplayComponent tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </>
  );
}

export default App;
