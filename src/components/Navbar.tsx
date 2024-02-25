import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import {NavLink} from "react-router-dom";
import "../css/Navbar.css"
import TripHive_logo from "../assets/images/TripHive.png";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="logo">
                <NavLink to="" className="link">
                    <img className="logo-img" src={TripHive_logo} alt="TripHive"/>
                </NavLink>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search Places here ..."/>
                <div className="search-icon">
                    <NavLink to="" className="nav-link">
                        <IoIosSearch/>
                    </NavLink>
                </div>
            </div>

            <div className="navlist">
                <a href="/public">Destinations</a>
                <a href="/public">Bookings</a>
                <a href="/public">AboutUs</a>

            </div>

            <div className="button-container">
                <div className="nav-btn">
                    <NavLink to="" className="nav-link">
                        <FaRegHeart/>
                    </NavLink>
                </div>
                <div className="nav-btn">
                    <NavLink to="" className="nav-link">
                        <LuUser/>
                    </NavLink>
                </div>
            </div>
        </header>

    );
};

export default Navbar;