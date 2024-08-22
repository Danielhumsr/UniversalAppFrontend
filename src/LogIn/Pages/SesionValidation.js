import { useEffect, useState } from "react";
import { useLog } from "../Utils/LoginContext";
import { Navigate, Outlet } from "react-router-dom";

function SesionValidation() {
  const { tokenValidation, user } = useLog();
  const [loading, setLoading] = useState(true);
  const [validation, setValidation] = useState(true);



  useEffect(() => {
    if (!user) {
      let validationtoken = tokenValidation()
      validationtoken.then(function (resultado) {
        if (resultado === true) {
          setValidation(true)
          setLoading(false)
        } else {
          setValidation(false)
          setLoading(false)
        }
      });

    } else {
      setValidation(true)
      setLoading(false)
    }
  }, [])


  if (loading === true) return <h1>Loading.....</h1>
  //310 https://www.youtube.com/watch?v=NmkY4JgS21A&t=8124s
  if (validation === false && loading === false) return <Navigate to="/LogIn" />
  return (
    <Outlet />
  )
}

export default SesionValidation