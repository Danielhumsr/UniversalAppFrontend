import { useEffect } from 'react'
import { useLog } from '../../LogIn/Utils/LoginContext';
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from '../Componemts/NavBarComponent';

function ModulesMenu() {
    const { isAutenticate, errors: regErrors } = useLog();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAutenticate) navigate('/');
    }, [isAutenticate])
    return (
        <div>
            <NavBarComponent />

            <div className='container'>
                <div className="row" style={{paddingTop: "10px" }}> 
                    <div className="col-3">
                        <div className="card" data-bs-theme="dark">
                            <div className="card-header">
                                Modulo 1
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Gestion de Usuarios</h5>
                                <p className="card-text">Modulo donde se gestionan los usuarios.</p>
                                <a href="/SingUp" className="btn btn-primary">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" data-bs-theme="dark">
                            <div className="card-header">
                                Modulo 2
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Tareas</h5>
                                <p className="card-text">Modulo donde se gestion de tareas.</p>
                                <a href="/SingUp" className="btn btn-primary">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card " data-bs-theme="dark">
                            <div className="card-header">
                                Modulo 3
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Inventario</h5>
                                <p className="card-text">Modulo donde se gestionan los inventarios.</p>
                                <a href="/SingUp" className="btn btn-primary">Ingresar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ModulesMenu