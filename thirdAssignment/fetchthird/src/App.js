import './App.css';
import React from 'react';

import { useState } from 'react';


function App() {
  const [users, setUsers] = useState([]);
  const response = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data)=> setUsers(data))
  


  return (
    <div className="App">
      <header className="App-header">
        {users.map((user) => (<div key={users.id}>{user.name}
        {user.email}

        </div>))
      }

       
      </header>
    </div>
  );
}

export default App;
