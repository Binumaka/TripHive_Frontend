import { RiAdminLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { IoBookmarksOutline } from "react-icons/io5";
import { PiMapPinLineLight } from "react-icons/pi";
import {NavLink} from "react-router-dom";
import "../css/Navbar.css"
import TripHive_logo from "../assets/images/TripHive.png";

const AdminNavbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <NavLink to="/admin" className="link">
                    <img className="logo-img" src={TripHive_logo} alt="TripHive"/>
                </NavLink>
            </div>

            <div className="adminnavlist">
                <a href="/admin">
                    <PiMapPinLineLight className="icon_admin"/>
                    Destinations
                </a>
                <a href="/bookingList">
                    <IoBookmarksOutline className="icon_admin"/>
                    BookingLists
                </a>
                <a href="/userlist">
                    <AiOutlineUser className="icon_admin"/>
                    Users
                </a>
            </div>
            <div className="adminBtn">
                <a href="/upload">Upload</a>
            </div>

            <div className="adminnav-btn">
                <NavLink to="/login" className="nav-link">
                    <RiAdminLine className="icon_admin"/>
                </NavLink>
            </div>
        </header>

    );
};
export default AdminNavbar;