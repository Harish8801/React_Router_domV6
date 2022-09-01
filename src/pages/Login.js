import React from 'react';
import {useLocation} from "react-router-dom"

const Login = () => {
    const location=useLocation();
    console.log(location)
  return (
    <div><h1>Login First, {location.state.message}</h1></div>
  )
}

export default Login