import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../components/Navbar.tsx";
import "./destinationDetails.css";

const DestinationDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [destination, setDestination] = useState<any | null>(null);

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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DestinationDetails;
