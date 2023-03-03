import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../server/UserServer';



const Login = () => {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [validatorMSG, setValdatorMSG] = useState();

    const check = async (data) => {
        const message = {}



        if (!data.usersName) {
            message.usersName = "usersName is required"
            // return
        }
        if (!data.pass) {
            message.password = "password name is required"
            // return

            setValdatorMSG(message)

            if (Object.keys(message).length > 0) return false
            return true
        }
    }
    const history = useHistory()
    const handleLogin = async () => {

        let data = {
            usersName: username,
            pass: password
        }
        let test = check(data);
        if (!test) return
        try {

            let a = await login(data)
            localStorage.setItem("userinfor", JSON.stringify(a))


        } catch (error) {
        }


        history.replace("/home");
    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid" alt="Sample img" />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form style={{ marginTop: "100px" }}>
                            <div className="form-outline mb-4">
                                <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.username : ""}</p>
                                <input
                                    onChange={event => setusername(event.target.value)}
                                    type="email" id="form3Example3" className="form-control form-control-lg"
                                    placeholder="Enter a valid email address" />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>


                            <div className="form-outline mb-3">
                                <p style={{ color: "red" }}>{validatorMSG ? validatorMSG.password : ""}</p>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    onChange={event => setpassword(event.target.value)} placeholder="Enter password" />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button onClick={() => { handleLogin() }} type="button" className="btn btn-primary btn-lg" style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                                >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/Resigter"
                                    className="link-danger">Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Login