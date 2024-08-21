import { useEffect, useState } from "react";
import { useLog } from "../Utils/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function SesionValidation() {
const {isAutenticate, tokenValidation, user }= useLog();
const [loading, setLoading] = useState(true);
const [validation, setValidation] = useState(true);



useEffect(()=>{
  
  console.log(user, "usuario antes de la validacion")
  if(!user){
     let validationtoken = tokenValidation()
     validationtoken.then(function (resultado){
      console.log(resultado,"resultado")
      if(resultado == true){
        setValidation(true)
        setLoading(false) 
        console.log(validation, "validacion true")
       }else{
        setValidation(false)
        setLoading(false) 
        console.log(validation, "validacion false")
       }
      console.log(resultado,"resultado")});

    
  }else{
    setValidation(true)
        setLoading(false) 
    console.log(user)
    console.log(isAutenticate)
  }
  console.log("End------------------------------------")

  
  
}, [])
if(loading === true) return <h1>Loading.....</h1>
//310 https://www.youtube.com/watch?v=NmkY4JgS21A&t=8124s

if(validation === false && loading === false) return <Navigate to="/LogIn"/>
  return (
    <Outlet/>
  )
}

export default SesionValidation