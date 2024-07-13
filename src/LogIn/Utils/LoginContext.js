import { createContext, useState, useContext, useEffect } from 'react'
import { pruebaRequiest, lopInRequiest } from "../Utils/ApiUtils";
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
            setUser(res.data);
            setIsAutenticate(true);
        }catch(error){
            console.log(error.response.data)
            setErrors(error.response.data.error)
        }

    }

    const singIn = async (user) => {
        try {
            const res = await lopInRequiest(user);
            setUser(res.data);
            console.log(res.data);
            setIsAutenticate(true);

        }catch(error){
            console.log(error.response.data)
            setErrors(error.response.data.error)
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
            user,
            isAutenticate,
            errors
        }}>
            {children}
        </logContext.Provider>
    )
}