import logo from './logo.svg';
import './App.css';
import ThemeToggleButton from './components/ThemeToggleButton';
import { useContext } from 'react';
import { ThemeContext } from './context/toggle';
import Counter from './components/Counter';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <>
    <div className="App">
     <div style={{background: theme === "light" ? "#fff" : "#333"}}>
     <ThemeToggleButton />
     </div>
     <div>
      <Counter />
     </div>
      </div>
    </>
  );
}

export default App;
