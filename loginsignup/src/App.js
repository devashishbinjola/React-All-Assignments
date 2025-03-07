import './App.css';
import Card from './components/Card';
// import { BrowserRouter, Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {
  // const currentUser= JSON.parse(localStorage.getItem("currente;r")) || [];
  const currentStoredUser = JSON.parse(localStorage.getItem("currentUser")) || "";
  // setCurrentUser(currentStoredUser);
    const [currentUser,setCurrentUser] = useState(currentStoredUser);
  // useEffect(()=>{
  //   setCurrentUser(currentStoredUser);
  //   console.log(currentStoredUser);
  // },[]);
  return (
    <div className="App">
     
     {/* {currentUser && <Navbar />} */}
     <Card currentUser={currentUser} setCurrentUser={setCurrentUser} />
      
    </div>
  );
}

export default App;
