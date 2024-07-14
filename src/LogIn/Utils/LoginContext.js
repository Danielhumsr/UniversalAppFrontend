import { createContext, useState, useContext, useEffect } from 'react'
import { pruebaRequiest, lopInRequiest, validatetoken } from "../Utils/ApiUtils";
import Cookies from 'js-cookie';
export const logContext = createContext();

export const useLog = () => {
    const context = useContext(logContext)
    if (!context) {
        throw new Error("Error no Contex");
    } else {
        return context
    }
};

export const LogProvaider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAutenticate, setIsAutenticate] = useState(false)
    const[errors, setErrors] = useState([])
    const singUp = async (user) => {
        try {
            const res = await pruebaRequiest(user);
            console.log(res)
            setUser(res.data.ObjetoRespuiesta.username);
            console.log(res.data.ObjetoRespuiesta.username);
            setIsAutenticate(true);
        }catch(error){
            console.log(error)
            setErrors(["Registro Invalido"])
        }

    }

    const singIn = async (user) => {
        
        try {
            const res = await lopInRequiest(user);
            setUser(res.data.objetoRespuiesta.username);
            console.log(res.data.objetoRespuiesta.username);
            const token = res.data.respuesta;
            Cookies.set('token', token, { expires: 7, secure: true });
            setIsAutenticate(true);

        }catch(error){
            console.log(error)
            setErrors(["Inicio de sesion Invalido"])
            setIsAutenticate(false);
            setUser(null);
        }

    }

    const tokenValidation = async () => {
        const tokenV = Cookies.get('token');
            if(!tokenV){
                setIsAutenticate(false);
                setUser(null);
                return;
            }
            try {
            const res = await validatetoken(user, tokenV);
            setUser(res.data.objetoRespuiesta.username);
            setIsAutenticate(true);
            } catch (error) {  
                console.log(error)
                setIsAutenticate(false);
                setUser(null);
            }
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setErrors([])
        },5000)
        return () => clearTimeout(timer)
    }, [errors])
    return (
        <logContext.Provider value={{
            singUp,
            singIn,
            tokenValidation,
            user,
            isAutenticate,
            errors
        }}>
            {children}
        </logContext.Provider>
    )
}