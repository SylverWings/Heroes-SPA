import { useNavigate } from "react-router-dom"

export const LoginPage = () => {

    const navigate = useNavigate();
    const onLogin = () =>{
        navigate('/', {
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
                    <button className="btn btn-success" onClick={ onLogin }>
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}
