import axios from "axios";

const apiURL = "http://localhost:8080/logIn"

 export const pruebaRequiest = user => axios.post(`${apiURL}/prueba`, user)

 export const lopInRequiest = user => axios.post(`${apiURL}/logIn`, user)