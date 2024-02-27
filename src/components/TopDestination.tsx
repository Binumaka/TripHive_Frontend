import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TravelCards from '../components/TravelCards.tsx';

interface Destination {
    _id: string;
    imageURL: string;
    destinationname: string;
    price: number;
}

const TopDestination: React.FC = () => {
    const [topdestination, setTopDestination] = useState<Destination[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Destination[]>("http://localhost:8080/destination/section/section1");
                setTopDestination(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {/* Corrected prop name from "Destination" to "destination" */}
            <TravelCards destination={topdestination} headline="Top Destination for your next vacation" />
        </div>
    );
};

export default TopDestination;
