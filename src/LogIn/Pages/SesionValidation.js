import { useEffect } from "react";
import { useLog } from "../Utils/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function SesionValidation() {
const {isAutenticate, tokenValidation }= useLog();
console.log(isAutenticate);

useEffect(()=>{
  tokenValidation();
}, [])

//310 https://www.youtube.com/watch?v=NmkY4JgS21A&t=8124s

if(!isAutenticate) return <Navigate to="/LogIn"/>
  return (
    <Outlet/>
  )
}

export default SesionValidation