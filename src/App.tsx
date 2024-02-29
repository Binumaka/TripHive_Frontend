
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Home from "./Homepage/home.tsx";
import Register from "./auth/register.tsx";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./auth/login.tsx";
import Upload from "./admin/UploadDestination.tsx";
import Destinations from "./Destinstions/Destinations.tsx";
import DestinationDetails from "./Destinstions/destinationDetails.tsx";
import Update from "./admin/UpdateDestination.tsx";
import AdminNavbar from "./admin/AdminNavbar.tsx";
import Categories from "./Destinstions/Category/Categories.tsx";


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/destination" element={<Destinations />} />
                    <Route path="/travelling/:id" element={<DestinationDetails />} />
                    <Route path="/admin" element={<AdminNavbar/>}/>
                    <Route path="/upload" element={<Upload/>}/>
                    <Route path="/category/:category" element={<Categories/>}/>
                    <Route path="/update/:id" element={<Update/>}/>
                </Routes>
            </Router>
            <ToastContainer position='top-left' autoClose={900} />
        </QueryClientProvider>
    );
}

export default App;