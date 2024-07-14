import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const {singUp, isAutenticate, errors: regErrors }= useLog();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAutenticate) navigate('/ModuleMenu');
    }, [isAutenticate])

    console.log("contex ", isAutenticate)
    const onSubmit = handleSubmit(async (values) => {
        singUp(values);
    })
    return (
        <div className="">
            <div className="">
                <h1 className="">Registrate</h1>
                {
                    regErrors.map((error, i)=>(
                        <div className="">{error}</div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="Text" {...register("username", { required: true })}
                        className=""
                        placeholder="User Name" />
                        {errors.username &&(<p className=""> Error en User name</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className=""
                        placeholder="Password" />
                         {errors.password &&(<p className=" "> Error en Password</p>)}
                    <input type="Text" {...register("rol", { required: true })}
                        className=""
                        placeholder="Rol" />
                         {errors.rol &&(<p className=""> Error en Rol</p>)}
                    <button type="submit">
                        Register
                    </button>
                    <p className="">Ya tienes cuenta <Link className="" to={"/LogIn"}>Inicia secion</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage