import { useEffect, useState } from "react";
import axios from 'axios';
import "./css/AdminDestination.css";
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar.tsx";


const AdminDestination = () => {
    const [destination, setDestination] = useState<any[]>([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/destination/getAll`);
                console.log('API Response:', response.data);


                if (Array.isArray(response.data) && response.data.length > 0) {
                    setDestination(response.data);
                } else {
                    console.error('Invalid response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching destinations:', error);
            }
        };


        fetchData();
    }, []);


    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/destination/deleteById/${id}`);
            setDestination(prevDestination => prevDestination.filter(destinationC => destinationC.id !== id));
        } catch (error) {
            console.error('Error deleting destination:', error);
        }
    };




    return (
        <>
            <AdminNavbar/>
            <div className="AdminView-content">
                <h2 className="Admin-name">
                    Available destination
                </h2>
                <div className="AdminCard_container">
                <div className="Adminrow">
                    <div className="Admincategory">
                    {destination && destination.length > 0 ? (
                        destination.map((destinationC) => (
                            <div key={destinationC.id} className="Admin-rows">
                                <img src={destinationC.imageurl} alt={`Cover of ${destinationC.destinationname}`} />
                                    <div className="Admin-text">
                                        <h3>{destinationC.destinationname}</h3>
                                        <div className="Admin-buttons">
                                            <button onClick={() => handleDelete(destinationC.id)}>Delete</button>
                                            <Link to={`/update/${destinationC.id}`}>
                                                <button>Edit</button>
                                            </Link>
                                        </div>

                                    </div>
                                </div>

                        ))
                    ) : (
                        <p>No destination available.</p>
                    )}
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default AdminDestination;