import React, { useContext } from 'react'
import { ThemeContext } from '../../contextAPI/ThemeContext'

const Header = () => {

    const {theme,toggleTheme}= useContext(ThemeContext);

  return (
    <header className={` fixed top-0 left-0 right-0 flex justify-between items-center ${theme==='dark'? "bg-gray-900 text-gray-200":" bg-white"} w-full  p-2`}>
        <div>
            <h4>Advanced Task Manager</h4>
        </div>
        <button
          onClick={toggleTheme}
          className={`  p-2  font-semibold   rounded bg-gray-200 ${
            theme === "dark" ? "text-gray-900 bg-gray-100" : "bg-gray-900 text-white"
          }`}
        >
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
        
    </header>
  )
}

export default Header