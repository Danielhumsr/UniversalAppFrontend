import axios  from "./AxiosConfig";

const apiURL = "/logIn"
const apiURLProtecte = "/module/user"

 export const pruebaRequiest = user => axios.post(`${apiURL}/prueba`, user)

 export const lopInRequiest = user => axios.post(`${apiURL}/logIn`, user)

 export const validatetoken = (token) =>  {
    const data = {
       
    }
     const res = axios.post(`/module/user/ValidateToken`, data,{headers:{'Authorization': "Bearer "+token}})
     return res
 }