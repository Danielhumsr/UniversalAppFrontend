import { useEffect, useState } from "react";
import { useLog } from '../../LogIn/Utils/LoginContext';
import NavBarComponent from "../../Global/Componemts/NavBarComponent"
import { ListarUsuarios } from "../Utils/UserContext";
function GestionUsuarios() {
  const { user } = useLog();
  const [userList, setUserList] = useState([])

  useEffect(() => {
    let listaUsuarios = ListarUsuarios()
    listaUsuarios.then(function (resultado) {
      setUserList(resultado)
      console.log(resultado)
    })

     

  }, [])


  const desactivarUsuario = async () => {
    alert('¡Desactivar usuario!');
  };

  const activarUsuario = async () => {
    alert('¡Activar usuario!');
  };

  return (
    <div>
      <NavBarComponent usuario={user} />
      <div className="container">
        <div style={{ paddingTop: "30px" }}>
        <button className="btn btn-primary m-1">Crear</button>
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Usuario</th>
                <th scope="col">Email</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
              {
                userList.map((lista, i) => (  
                  <tr  key={lista.id} className={lista.estado==='2'? ("table-warning"):("") } >
                    <th scope="row">{lista.id}</th>
                    <td>{lista.username}</td>
                    <td>{lista.email}@correousuario.com</td>
                    <td>
                    <button  className={lista.estado==='2'? ("btn btn-primary me-1 disabled"): ("btn btn-primary me-1")} >Editar</button>
                    {lista.estado==='2'? ( <button className="btn btn-primary me-1" onClick={activarUsuario}> Activar</button>): 
                    ( <button className="btn btn-primary me-1" onClick={desactivarUsuario}>Desactiuvar</button>)}
                   
                    </td>
                  </tr>


                ))
              }

            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default GestionUsuarios