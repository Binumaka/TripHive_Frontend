
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
import Categories from "./Destinstions/Category/Categories.tsx";
import AdminDestination from "./admin/AdminDestination.tsx";
import ContactUs from "./components/ContactUs.tsx";
import UserList from "./admin/UsersList.tsx";
import Booking from "./components/Booking.tsx";
import BookingList from "./admin/Booking_List.tsx";


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
                    <Route path="/booking" element={<Booking/>}/>
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="/admin" element={<AdminDestination/>}/>
                    <Route path="/userlist" element={<UserList/>}/>
                    <Route path="/bookingList" element={<BookingList/>}/>
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