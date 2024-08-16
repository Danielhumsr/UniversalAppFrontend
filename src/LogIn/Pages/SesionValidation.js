import { useEffect } from "react";
import { useLog } from "../Utils/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function SesionValidation() {
const {isAutenticate, tokenValidation, user }= useLog();

useEffect(()=>{
  if(!user){
    tokenValidation();
    console.log(user)
  console.log(isAutenticate)
  }else{
    console.log(user)
    console.log(isAutenticate)
  }
  
  
}, [])

//310 https://www.youtube.com/watch?v=NmkY4JgS21A&t=8124s

if(!isAutenticate) return <Navigate to="/LogIn"/>
  return (
    <Outlet/>
  )
}

export default SesionValidation