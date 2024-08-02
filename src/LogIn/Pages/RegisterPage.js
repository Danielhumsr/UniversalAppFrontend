import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBarComponent from "../../Global/Componemts/NavBarComponent"


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singUp, isAutenticate, errors: regErrors } = useLog();
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
            <NavBarComponent />
            <div style={{ height: "50vh" }}>
                <div className=' d-flex justify-content-center align-items-center h-100'>
                    <div className="row">
                        <div className="col">
                            <div className="card " data-bs-theme="dark" style={{ width: "45vh" }}>
                                <div className="card-header">
                                    Registrate
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Registrate</h5>
                                    {
                                        regErrors.map((error, i) => (
                                            <div className="">{error}</div>
                                        ))
                                    }
                                    <form onSubmit={onSubmit}>
                                        <div className="mb-3">
                                            <input type="Text" {...register("username", { required: true })}
                                                className="form-control"
                                                placeholder="User Name" />
                                            {errors.username && (<p style={{ color: "red" }}> Usuario requerido</p>)}
                                        </div>
                                        <div className="mb-3">
                                            <input type="password" {...register("password", { required: true })}
                                                className="form-control"
                                                placeholder="Password" />
                                            {errors.password && (<p style={{ color: "red" }}> Constraseña requerido</p>)}
                                        </div>
                                        <div className="mb-3">
                                            <input type="Text" {...register("rol", { required: true })}
                                                className="form-control"
                                                placeholder="Rol" />
                                            {errors.rol && (<p style={{ color: "red" }}> Rol requerido</p>)}
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-3">
                                            Register
                                        </button>
                                        <p className="">Ya tienes cuenta <Link className="" to={"/LogIn"}>Inicia secion</Link> </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default RegisterPage