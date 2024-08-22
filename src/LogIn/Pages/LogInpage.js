import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useLog } from "../Utils/LoginContext";
import { Link, useNavigate } from "react-router-dom";
import NavBarComponent from "../../Global/Componemts/NavBarComponent"

function LogInpage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { singIn, isAutenticate, errors: regErrors } = useLog();
    const navigate = useNavigate();

    const onSubmit = handleSubmit(async (values) => {
        let singInV = singIn(values)
        console.log(singInV)
        singInV.then(function (resultado){
            if(resultado){
                console.log(resultado)
                navigate('/ModuleMenu')
            }
        })
    })
    return (
        <div>
            <NavBarComponent />
            <div style={{ height: "50vh" }}>
                <div className=' d-flex justify-content-center align-items-center h-100'>
                    <div className="row">
                        <div className="col">
                            <div className="card " data-bs-theme="dark" style={{ width: "45vh" }} >
                                <div className="card-header">
                                    LogIn
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Log In</h5>
                                    {
                                        regErrors.map((error, i) => (
                                            <div className="text-danger" key={i}>{error}</div>
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
                                        <button type="submit" className="btn btn-primary mb-3">
                                            LogIn
                                        </button>
                                        <p className="">No tienes cuenta? <Link className="" to={"/SingUp"}>Registrate</Link> </p>
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

export default LogInpage