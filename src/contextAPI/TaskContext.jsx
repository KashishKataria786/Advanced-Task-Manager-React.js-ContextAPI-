import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : [];
      });

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []); // Empty dependency array ensures this runs only once on mount

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]); // Dependency array ensures this runs whenever 'tasks' state changes

  const addTask = ({ title, description }) => {
    if (!title || !description) {
      toast.warn("Please provide both title and description.");
      return;
    }
    console.log("Task Started");
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    console.log("Ended");
    toast.success("Task Added Successfully");
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.info("Task Deleted Successfully");
  };

  const taskComplete = (id)=>{

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    ) 
    
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask,taskComplete }}>
      {children}
    </TaskContext.Provider>
  );
};