import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './contextAPI/ThemeContext.jsx'
import { TaskProvider } from './contextAPI/TaskContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <TaskProvider>
        <App/> 
      </TaskProvider>
    </ThemeProvider>
 </StrictMode>,
)
