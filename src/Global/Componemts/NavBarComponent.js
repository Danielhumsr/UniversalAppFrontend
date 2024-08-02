import React from 'react'
import { Link } from "react-router-dom";

function NavBarComponent() {
  return (
    <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand " href="/">Univelsal App</a>
      <div>
      <span className="navbar-text"><Link className="" to={"/LogIn"}>Log In</Link></span>
      <span className="navbar-text">/</span>
      <span className="navbar-text "><Link className="" to={"/SingUp"}>Registrate</Link></span>
      </div>
    </div>
  </nav>
  )
}

export default NavBarComponent