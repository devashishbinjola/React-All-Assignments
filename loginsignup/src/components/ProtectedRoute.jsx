import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({currentUser,children}) => {
  return currentUser ? children : <Navigate to="/login" />
}

export default ProtectedRoute
