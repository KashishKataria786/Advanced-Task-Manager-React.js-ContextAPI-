import React, { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TaskDisplayComponent from './components/TaskDisplayComponent';
import { ThemeContext } from './contextAPI/ThemeContext';
import { ToastContainer, toast } from 'react-toastify';
import { TaskContext } from './contextAPI/TaskContext';
import TaskManager from './pages/TaskManager';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<TaskManager/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    
    </>
  );
}

export default App;
