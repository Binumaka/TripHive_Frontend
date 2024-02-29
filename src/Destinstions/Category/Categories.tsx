import { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Categories.css";
import Navbar from "../../components/Navbar.tsx";

const Categories = () => {
    const [destination, setPlant] = useState<any[]>([]);
    const { category } = useParams<{ category: string }>();
    // const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/destination/category/${category}`);
                console.log('API Response:', response.data);


                if (Array.isArray(response.data) && response.data.length > 0) {
                    setPlant(response.data);
                } else {
                    console.error('Invalid response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching plants:', error);
            }
        };


        fetchData();
    }, [category]);

    // const handleAddToCart = (plantItem: any) => {
    //     setCartItems((prevCartItems) => [...prevCartItems, plantItem]);
    //     console.log(`Added plant with ID ${plantItem.id} to the cart.`);
    // };


    return (

        <>
            <Navbar />
            <div className="destinationView-content">
                <h2 className="destination-name">
                    {category}
                </h2>
                <div className="destination_con">
                    <div className="destinationslider-container">
                        <div className="destinationslider">
                            <div className="destinationslide">
                                {destination && destination.length > 0 ? (
                                    destination.map((destination) => (
                                        <Link to={`/travelling/${destination.id}`} key={destination.id}
                                              className="destinationDisplaycategory">
                                            <img src={destination.imageurl}
                                                 alt={`Cover of ${destination.destinationname}`}/>
                                            <div className="destinationinfo_wrapper">
                                                <h3>{destination.destinationname}</h3>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p>No plants available.</p>
                                )}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;