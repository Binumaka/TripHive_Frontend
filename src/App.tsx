import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/login.tsx";
import Register from "./auth/register.tsx";
import Home from "./Homepage/home.tsx"

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/' element={<Home />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
