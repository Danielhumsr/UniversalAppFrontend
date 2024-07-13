import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { Link, useNavigate } from "react-router-dom";

function LogInpage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {singIn, isAutenticate, errors: regErrors }= useLog();
    const navigate = useNavigate();
    useEffect(()=>{
        if(isAutenticate) navigate('/ListUser');
    }, [isAutenticate])
    const onSubmit = handleSubmit(async (values) => {
        singIn(values);
    })
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-slate-800 max-w-md p-10 rounded-md">
                <h1 className="text-center text-2xl font-bold">LogIn</h1>
                {
                    regErrors.map((error, i)=>(
                        <div className="bg-red-500 p-2 text-white rounded-md my-2">{error}</div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="Text" {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="User Name" />
                    {errors.username && (<p className=" text-red-500"> Error en User name</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password" />
                    {errors.password && (<p className=" text-red-500"> Error en Password</p>)}
                    <button type="submit">
                        LogIn
                    </button>
                    <p className="flex gap-x-2 justify-between">No tienes cuenta? <Link className="text-sky-500" to={"/SingUp"}>Registrate</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default LogInpage