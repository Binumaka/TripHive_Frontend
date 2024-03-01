import React, { useState } from "react";
import { LuUser } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom"; // Import useNavigate
import "../css/Navbar.css";
import TripHive_logo from "../assets/images/TripHive.png";

const Navbar: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("darkMode") === "true"
    );
    const [showDropdown, setShowDropdown] = useState(false); // State to control dropdown visibility
    const navigate = useNavigate(); // Use useNavigate hook

    const toggleDarkMode = () => {
        const updatedDarkMode = !isDarkMode;
        setIsDarkMode(updatedDarkMode);
        localStorage.setItem("darkMode", updatedDarkMode.toString());
    };

    const handleLogout = () => {
        // Clear user authentication data from local storage
        localStorage.removeItem("userId");
        localStorage.removeItem("userData");
        // Redirect to login page
        navigate("/login"); // Use navigate function
    };

    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    return (
        <header className={`navbar ${isDarkMode ? "dark" : ""}`}>
            <div className="logo">
                <NavLink to="/" className="link">
                    <img className="logo-img" src={TripHive_logo} alt="TripHive" />
                </NavLink>
            </div>
            <div className="searchbar">
                <input type="text" placeholder="Search Places here ..." />
                <div className="search-icon">
                    <NavLink to="" className="nav-link">
                        <IoIosSearch />
                    </NavLink>
                </div>
            </div>

            <div className="navlist">
                <a href="/destination">Destinations</a>
                <a href="/Booking">Booking</a>
                <a href="/contactus">ContactUs</a>
            </div>

            <div className="button-container">
                <div className="nav-btn">
                    <NavLink to="" className="nav-link">
                        <FaRegHeart />
                    </NavLink>
                </div>
                <div className="nav-btn" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <LuUser className="nav-link" />
                    {showDropdown && (
                        <div className="dropdown-content">
                            <h2 onClick={handleLogout}>Logout</h2>
                        </div>
                    )}
                </div>
            </div>

            <input
                type="checkbox"
                name="checkbox_toggle"
                id="checkbox"
                hidden
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
            <label htmlFor="checkbox" className="toggle">
                <div className="toggle"></div>
            </label>
        </header>
    );
};

export default Navbar;
