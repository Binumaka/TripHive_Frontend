import '../auth/login.css';
import Navbar from "../components/Navbar.tsx";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
    const navigate = useNavigate();

    const loginUser = useMutation(
        (loginData: any) => axios.post("http://localhost:8080/authenticate", loginData),
        {
            onSuccess: () => {
                navigate('/');
            },
        }
    );

    const handleLogin = (values: any) => {
        console.log(values);
        // Check if the login credentials match admin login and password
        if (values.email === 'admin@gmail.com' && values.password === 'admin123') {
            // Perform admin login
            console.log('Admin logged in');
            navigate('/admin');
        } else {
            // If not admin, proceed with regular login
            loginUser.mutate(values);
        }
    };

    const {
        register,
        handleSubmit,
        formState,
        reset
    } = useForm();

    return (
        <>
            <Navbar />
            <div className="main-loginContainer">
                <div className="left-wrapperLogin"></div>
                <div className="wrapper">
                    <div className="form-box login">
                        <h2>Log In</h2>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="input-box">
                                <input {...register("email")} type="email" required />
                                <label>Email</label>
                            </div>
                            <div className="input-box">
                                <input {...register("password")} type="password" required />
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
    );
};

export default Login;
