import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
         <div className="">
            <div className="">
                <h1 className="">Home Page</h1>
                <p className="" >Universal APP</p>
                <p className=''>Aplicacion que contiene retos y apredizajes de <br/> Daniel Salazar</p>
                <p className='' >As <Link className="" to={"/LogIn"}>Log In</Link> para porder ver todas las funciones </p>
                <p className=''>o <Link className="" to={"/LogIn"}>Registrate</Link> para empesar a conocer</p>
            </div>
         </div>

    </div>
  )
}

export default HomePage