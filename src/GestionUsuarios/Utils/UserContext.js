import {listarUsuariosApi } from "./UserApi";

export const ListarUsuarios = async (user) => {
    try {
        const res = await listarUsuariosApi();
        return res.data.listaObjetoRespuesta[0]
    }catch(error){
        console.error(error)
    }

}


