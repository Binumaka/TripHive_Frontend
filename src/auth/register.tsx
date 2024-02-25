import './Register.css'
import Navbar from "../components/Navbar.tsx";

function Register() {
    return (
        <>
            <Navbar/>
        <div className="main-registerContainer">
            <div className="leftwrapperregister"></div>
            <div className="wrapper1">
                <div className="form-box register">
                    <h2>Register</h2>

                    <form action="#">
                        <div className="inputbox">
                            <input type="username" required />
                            <label>Username</label>
                        </div>

                        <div className="inputbox">
                            <input type="email" required />
                            <label>Email</label>
                        </div>

                        <div className="inputbox">
                            <input type="password" required />
                            <label>Password</label>
                        </div>

                        <div className="conditions">
                            <label>
                                <input type="checkbox" />
                                I agree the terms & conditions
                            </label>
                        </div>

                        <button type="submit" className="register-btn">
                            Register
                        </button>

                        <div className="login">
                            <p>
                                Already have an account?
                                <a href="login" className="Register-link">
                                    {' '}
                                    Login
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Register
