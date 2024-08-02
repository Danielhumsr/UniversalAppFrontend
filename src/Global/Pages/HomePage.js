import React from 'react'
import { Link } from "react-router-dom";
import NavBarComponent from "../Componemts/NavBarComponent"

function HomePage() {
  return (
    <div>
      <NavBarComponent />
      <div style={{ height: "50vh" }}>
        <div className=' d-flex justify-content-center align-items-center h-100'>
          <div className="row">
            <div className="col">
              <div className="card text-center " data-bs-theme="dark"  style={{ width: "45vh" }}>
                <div className="card-header">
                  Bienvenido
                </div>
                <div className="card-body">
                  <h5 className="card-title">Universal App</h5>
                  <p className="card-text">Aplicacion que se desertan y apredizajes de <strong>Daniel Salazar</strong>.</p>
                  <a href="/LogIn" className="btn btn-success">Log In</a>
                  <span> Si no tienes cuenta </span>
                  <a href="/SingUp" className="btn btn-primary">Sing Up</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage