import React from 'react'
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
         <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-slate-800 max-w-md p-10 rounded-md">
                <h1 className="text-center text-2xl font-bold my-4">Home Page</h1>
                <p className="text-center text-2xl font-bold" >Universal APP</p>
                <p className='text-center  my-7'>Aplicacion que contiene retos y apredizajes de <br/> Daniel Salazar</p>
                <p className='text-center' >As <Link className="text-sky-500" to={"/LogIn"}>Log In</Link> para porder ver todas las funciones </p>
                <p className='text-center'>o <Link className="text-sky-500" to={"/LogIn"}>Registrate</Link> para empesar a conocer</p>
            </div>
         </div>

    </div>
  )
}

export default HomePage