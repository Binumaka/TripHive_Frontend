import './login.css';
import Navbar from "../components/Navbar.tsx";

function Login() {
    return (
        <>
            <Navbar/>
            <div className="main-loginContainer">
                <div className="left-wrapperLogin"></div>
        <div className="wrapper">
            <div className="form-box login">
                <h2>Log In</h2>

                <form action="#">
                    <div className="input-box">
                        <input type="email" required />
                        <label>Email</label>
                    </div>

                    <div className="input-box">
                        <input type="password" required />
                        <label>Password</label>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" />
                            Remember me
                        </label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit" className="btn">
                        Login
                    </button>

                    <div className="register">
                        <p>
                            Don't have an account?
                            <a href="register" className="Login-link">
                                {' '}
                                Register
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

export default Login;
