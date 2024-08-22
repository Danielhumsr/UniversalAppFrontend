import axios  from "../../Global/Utils/AxiosConfig";


const apiURL = "/logIn"


export const listarUsuariosApi = async () => axios.get(`${apiURL}/listar`)

export const listarUsuariosApitoken = (token) =>  {
    const data = {}
     const res = axios.post(`${apiURL}/listar`, data,{headers:{'Authorization': "Bearer "+token}})
     return res
 }