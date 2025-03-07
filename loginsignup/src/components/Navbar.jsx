import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/Navbar.css";
import Home from './Home';

const Navbar = ({currentUser,setCurrentUser}) => {
    const navigate = useNavigate();
        
    const handleLogout =()=>{
        localStorage.removeItem("currentUser");
        setCurrentUser("");
        navigate("/login");
    }
  return (
    <div>
      <nav className='navbar'>
        <h1>Logo</h1>
        <div className='navLinks'>
            <Link className='link' to="/home">Home</Link>
            <Link className='link' to="/aboutUs">About Us</Link>
            <Link className='link' to="/contactUs">Contact Us</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
