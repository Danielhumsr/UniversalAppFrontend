import React from 'react'
import { Link } from "react-router-dom";

function NavBarComponent(usuario) {
  function handleClick() {
    alert('¡Me hiciste clic!');
    console.log("entro")
  }
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand " href="/">Univelsal App</a>
        <div>
          {
            !usuario.usuario ?
              <span>
                <span className="navbar-text"><Link className="" to={"/LogIn"}>Log In</Link></span>
                <span className="navbar-text">/</span>
                <span className="navbar-text "><Link className="" to={"/SingUp"}>Registrate</Link></span>
              </span>
              : <span>
                <span className="navbar-text">{usuario.usuario}</span>
                <span className="navbar-text " onClick={handleClick}> /<Link className="" to={"/"}> salir</Link></span>
              </span>


          }

        </div>
      </div>
    </nav>
  )
}

export default NavBarComponent