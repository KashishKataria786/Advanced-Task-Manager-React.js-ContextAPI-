import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext=  createContext({
    theme:"light-theme",
    toggleTheme:()=>{}
})

const ThemeProvider =({children})=>{
    const [theme,setTheme]=useState('light');

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme){
            setTheme(storedTheme);
            document.documentElement.classList.add(storedTheme);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('theme',theme);
        document.body.classList.toggle('dark', theme==='dark');
    },[theme])

    const toggleTheme = ()=>{
        setTheme(prevTheme=>prevTheme==='light' ? 'dark' :"light");
    };

    return(
            <ThemeContext.Provider value={{theme,toggleTheme}}>
                {children}
            </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider};