import React from "react";
import Navbar from "../components/Navbar.tsx";
import "./Destinations.css";
import Destination_Slider from "./Category/slider/Destination_Slider.tsx";

const Destinations: React.FC = () => {
    return (
        <>
            <Navbar/>
            <div className="destination_container">
                <div className="d_container">
                    <h1>Destinations</h1>
                </div>
            </div>
            <div className="container_category">
                <Destination_Slider/>
            </div>
        </>
    );
}

export default Destinations;
