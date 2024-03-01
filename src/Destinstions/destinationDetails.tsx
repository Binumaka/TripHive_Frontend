import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import Navbar from "../components/Navbar.tsx";
import "./destinationDetails.css";

const DestinationDetails : React.FC =() => {
    const { id } = useParams<{ id: string }>();
    const [destination, setDestination] = useState<any | null>(null);
    const navigate = useNavigate(); // Initialize useNavigate

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!id) {
                    console.error('ID is undefined');
                    return;
                }

                const response = await axios.get(`http://localhost:8080/destination/travelling/${id}`);
                setDestination(response.data || null);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleBookNow = (destinationId: string) => {
        // Redirect user to booking page or perform other actions
        console.log(`Book Now clicked for destination with ID ${destinationId}`);
        navigate(`/booking`);
    };

    if (!destination) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className='destinationDetails-container'>
                <div className="detail-container">
                    <div className="destinationdetails-wrapper">
                        <div className="destinationcontent">
                            <img src={destination.imageurl} alt={destination.destinationname} className="destinationdetails_img" />
                            <div className="destinationdetail-info">
                                <h2 className="destinationdetailsname">{destination.destinationname}</h2>
                                <h4 className="destinationDcategory">{destination.category}</h4>
                                <p className="destinationdescription">{destination.description}</p>
                                <button className="booknow_btn" onClick={() => handleBookNow(destination.id)}>
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DestinationDetails;
