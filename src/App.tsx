
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Home from "./Homepage/home.tsx";
import Register from "./auth/register.tsx";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./auth/login.tsx";
import Upload from "./admin/UploadDestination.tsx";


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/admin" element={<Upload/>}/>
                </Routes>
            </Router>
            <ToastContainer position='top-left' autoClose={900} />
        </QueryClientProvider>
    );
}

export default App;