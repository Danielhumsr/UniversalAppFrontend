import { createContext, useState, useContext, useEffect } from 'react'
import { pruebaRequiest, lopInRequiest, validatetoken } from "./LoginApiUtils";
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
            console.log(res.data.objetoRespuesta.username)
            setUser(res.data.objetoRespuesta.username);
            setIsAutenticate(true);
           
        }catch(error){
            console.error(error)
            setErrors(["Registro Invalido"])
        }

    }

    const singIn = async (user) => {
        
        try {
            const res = await lopInRequiest(user);
            setUser(res.data.objetoRespuesta.username);
            const token = res.data.respuesta;
            Cookies.set('token', token, { expires: 7, secure: true });
            setIsAutenticate(true);
            return true

        }catch(error){
            //console.error(error)
            console.error(error.response.data.respuesta)
            setErrors([error.response.data.respuesta])
            setIsAutenticate(false);
            setUser(null);
            return false
        }

    }

    const tokenValidation = async () => {
        const tokenV = Cookies.get('token');
            if(!tokenV){
                setIsAutenticate(false);
                setUser(null);
                return false;
            }
            try {
            const res = await validatetoken(tokenV);
            setUser(res.data.objetoRespuesta.username);
            setIsAutenticate(true);
            return true;
            } catch (error) {  
                console.error(error)
                setIsAutenticate(false);
                setUser(null);
                return false;
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