import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import {show_alerta} from '../utils/functions';

const ListarUsuariosVista = () => {
    const url = 'http://localhost:8080/logIn/listar';
    const[usuarioV , setUsuarioV]= useState([]);

    useEffect(() => {
        getUser();
    },[]);

    const getUser = async() =>{
        const respuesta = await axios.get(url);
        console.log(respuesta.data)
        setUsuarioV(respuesta.data);
    }
  return (
    <div className="container-fluid">
        <div>
            <h1>Usuarios Creados</h1>
        </div>
        <div className="row mt-3">
            <div className="col-12 col-lg-8 offset-0 offset-lg-2">
                <div className="table-responsive">
                    <table className="table table-bordered">
                        <thead>
                            <tr><th>#</th><th>User</th><th>Clave</th><th></th></tr>
                        </thead>
                        <tbody className="table-group-divider">
                            { usuarioV.map( (usuarioVm, i)=>(
                                    <tr key={usuarioVm.id}>
                                        <td>{(i+1)}</td>
                                        <td>{usuarioVm.username}</td>
                                        <td>{usuarioVm.password}</td>
                                        <td>
                                            <button className="btn btn-danger" >Eliminar</button>
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListarUsuariosVista