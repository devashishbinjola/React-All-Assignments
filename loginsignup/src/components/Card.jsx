import SignUp from "./SignUp";
import Login from "./Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import ProtectedRoute from "./ProtectedRoute";


const Card = ({currentUser,setCurrentUser}) => {
 
  console.log(currentUser);     
  return (
    <Router>
      {currentUser && <Navbar currentUse={currentUser} setCurrentUser={setCurrentUser} />}
      <Routes>
        <Route path="/" element={<Navigate to= {currentUser ? "/home" : "/login"} />} />
        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login  currentUser={currentUser} setCurrentUser=
        {setCurrentUser} />} />


        <Route path="/home" element ={<ProtectedRoute currentUser={currentUser}><Home /></ProtectedRoute>} />
        <Route path="/aboutUs" element={<ProtectedRoute currentUser={currentUser}><AboutUs/></ProtectedRoute>} />
        <Route path="/ContactUs" element={<ProtectedRoute currentUser={currentUser}><ContactUs/></ProtectedRoute>} />


        
        <Route path="*" element={<Navigate to={currentUser ? "/home" : "/login"} />} />
        
      </Routes>
    </Router>
  );
};

export default Card;
