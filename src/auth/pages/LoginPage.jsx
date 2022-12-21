import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();
    const {loginText, onInputChange} = useForm()

    const onLogicSubmit = (event) =>{
        
        event.preventDefault();
        if( loginText.trim().length <= 1 ) return;
    }


    const onLogin = () =>{

        const lastPath = localStorage.getItem('lastPath') || '/'
        login(loginText)
        
        navigate(lastPath, {
            replace: true
        })
    }
    return (
        <>
            <div className="row d-flex justify-content-center">
                <div className="row container m-5 col-4">
                    <h1 className="d-flex justify-content-center">Login</h1>
                    <hr />
                </div>
                <div className="container m-3 d-flex justify-content-center">
                    <form onSubmit={ onLogicSubmit } className="row d-flex justify-content-center">
                        <input 
                            type="text" 
                            placeholder="Your Name"
                            className="form-control mb-3"
                            name="loginText"
                            autoComplete="off"
                            value={loginText}
                            onChange={onInputChange}
                        />     
                        <button className="btn btn-success" onClick={ onLogin }>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}
