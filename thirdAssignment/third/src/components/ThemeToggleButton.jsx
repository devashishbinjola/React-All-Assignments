import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from '../context/toggle';

const ThemeToggleButton = () => {
    const {theme,toggleTheme} = useContext(ThemeContext);
  return (
    <div className='background'>
      <button onClick={toggleTheme}>Change Theme</button>
    </div>
  )
}

export default ThemeToggleButton;
