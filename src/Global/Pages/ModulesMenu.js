import { useEffect } from 'react'
import { useLog } from '../../LogIn/Utils/LoginContext';
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from '../Componemts/NavBarComponent';

function ModulesMenu() {
    const { isAutenticate, errors: regErrors , user} = useLog();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAutenticate) navigate('/');
    }, [isAutenticate])
    return (
        <div>
            <NavBarComponent  usuario={user} />

            <div className='container'>
                <div className="row justify-content-md-center" style={{ paddingTop: "10px" }}>
                    <div className="col-sm-9" style={{ paddingTop: "20px" }}>
                        <input type="Text" className="form-control" placeholder="Buscar" />
                    </div>
                    </div>
                    <div className="row" style={{ paddingTop: "30px" }}>
                    <div className="col-sm-4" style={{ paddingTop: "10px" }}>
                        <div className="card h-100" data-bs-theme="dark">
                            <div className="card-header">
                               Usuarios
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"> Gestion de Usuarios</h5>
                                <p className="card-text">Modulo donde se gestionan los usuarios.</p>

                            </div>
                            <div className="card-footer">
                                <a href="/GestionUsuarios" className="btn btn-primary">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" style={{ paddingTop: "10px" }}>
                        <div className="card h-100" data-bs-theme="dark">
                            <div className="card-header">
                                Tareas
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Tareas</h5>
                                <p className="card-text">Modulo donde se gestion de tareas.</p>

                            </div>
                            <div className="card-footer">
                                <a href="/SingUp" className="btn btn-primary">Ingresar</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4" style={{ paddingTop: "10px" }}>
                        <div className="card h-100" data-bs-theme="dark" >
                            <div className="card-header">
                               Inventario
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Inventario</h5>
                                <p className="card-text">Modulo donde se gestionan los inventarios.</p>

                            </div>
                            <div className="card-footer">
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