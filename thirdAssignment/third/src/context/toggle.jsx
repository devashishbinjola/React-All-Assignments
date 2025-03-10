import React, { createContext, useState } from 'react'


export const ThemeContext=createContext(null);

export const ThemeProvider = (props)=> {
    const [theme,setTheme]= useState("light");
    const toggleTheme =()=>{
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }
    return (
        <ThemeContext.Provider value={{theme,toggleTheme}}>
             {props.children}
        </ThemeContext.Provider>
    );
};
