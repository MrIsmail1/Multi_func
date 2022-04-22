import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRouter = ({user,children}) => {
  if (!user.isConnected) {
    return <Navigate to="/login" replace/> 
  }
  return children;
}

export default PrivateRouter

/* this only allows access to loged users */