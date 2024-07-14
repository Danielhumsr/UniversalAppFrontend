import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { Link, useNavigate } from "react-router-dom";

function LogInpage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {singIn, isAutenticate, errors: regErrors }= useLog();
    const navigate = useNavigate();
    useEffect(()=>{
        if(isAutenticate) navigate('/ModuleMenu');
    }, [isAutenticate])

    const onSubmit = handleSubmit(async (values) => {
        singIn(values);
    })
    return (
        <div className="">
            <div className="">
                <h1 className="">LogIn</h1>
                {
                    regErrors.map((error, i)=>(
                        <div className="">{error}</div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="Text" {...register("username", { required: true })}
                        className=""
                        placeholder="User Name" />
                    {errors.username && (<p className=""> Error en User name</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className=""
                        placeholder="Password" />
                    {errors.password && (<p className=""> Error en Password</p>)}
                    <button type="submit">
                        LogIn
                    </button>
                    <p className="">No tienes cuenta? <Link className="" to={"/SingUp"}>Registrate</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default LogInpage