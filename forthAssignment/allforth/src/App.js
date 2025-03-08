import logo from './logo.svg';
import './App.css';
import InputRef from './components/InputRef';
import FilterList from './components/FilterList';
import Counter from './components/Counter';
import ThemeSwitcher from './components/ThemeSwitcher';

function App() {
  return (
    <div className="App">
    <InputRef />
    <FilterList />
     <Counter />
     <ThemeSwitcher />
    </div>
  );
}

export default App;
