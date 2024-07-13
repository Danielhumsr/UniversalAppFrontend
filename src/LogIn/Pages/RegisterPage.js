import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";


function RegisterPage() {
    const { register, handleSubmit, formState:{ errors } } = useForm();
    const {singUp, isAutenticate, errors: regErrors }= useLog();
    const navigate = useNavigate();

    useEffect(()=>{
        if(isAutenticate) navigate('/ListUser');
    }, [isAutenticate])

    console.log("contex ", isAutenticate)
    const onSubmit = handleSubmit(async (values) => {
        singUp(values);
    })
    return (
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-slate-800 max-w-md p-10 rounded-md">
                <h1 className="text-center text-2xl font-bold">Registrate</h1>
                {
                    regErrors.map((error, i)=>(
                        <div className="bg-red-500 p-2 text-white rounded-md my-2">{error}</div>
                    ))
                }
                <form onSubmit={onSubmit}>
                    <input type="Text" {...register("username", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="User Name" />
                        {errors.username &&(<p className=" text-red-500"> Error en User name</p>)}
                    <input type="password" {...register("password", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Password" />
                         {errors.password &&(<p className=" text-red-500"> Error en Password</p>)}
                    <input type="Text" {...register("rol", { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="Rol" />
                         {errors.rol &&(<p className=" text-red-500"> Error en Rol</p>)}
                    <button type="submit">
                        Register
                    </button>
                    <p className="flex gap-x-2 justify-between">Ya tienes cuenta <Link className="text-sky-500" to={"/LogIn"}>Inicia secion</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage