import React from 'react'
import { useLog } from "../Utils/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function SesionValidation() {
const {isAutenticate }= useLog();
console.log(isAutenticate)
//310 https://www.youtube.com/watch?v=NmkY4JgS21A&t=8124s

if(!isAutenticate) return <Navigate to="/LogIn"/>
  return (
    <Outlet/>
  )
}

export default SesionValidation