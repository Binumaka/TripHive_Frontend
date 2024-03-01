import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import "./CategoryDisplay.css"

const CategoryDisplay: React.FC = () => {
    const [destination, setDestination] = useState<any[]>([]);
    const { category } = useParams<{ category: string }>();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/destination/category/${category}`);
                console.log('API Response:', response.data);

                if (Array.isArray(response.data) && response.data.length > 0) {
                    setDestination(response.data);
                } else {
                    console.error('Invalid response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };

        fetchData();
    }, [category]);

    const handleBookNow = (destinationId: string) => {
        // Add your logic here
        console.log(`Book Now clicked for destination with ID ${destinationId}`);
    };

    return (
        <div className="destinationSlider-container">
            <div className="destinationSlide">
                {destination && destination.length > 0 ? (
                    destination.map((destination) => (
                        <div key={destination.id} className="destinationDisplayCategory">
                            <Link to={`/travelling/${destination.id}`}>
                                <img src={destination.imageurl} alt={`Cover of ${destination.destinationname}`} />
                                <div className="destinationInfo_wrapper">
                                    <h3>{destination.destinationname}</h3>
                                </div>
                            </Link>
                            <button className="booknow" onClick={() => handleBookNow(destination.id)}>
                                Book Now
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No destination available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default CategoryDisplay;


