import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "../Category/Categories.css";
import Navbar from "../../components/Navbar.tsx";
import CategoryDisplay from "./CategoryDisplay.tsx";

const Categories = () => {
    // const [destination, setDestination] = useState<any[]>([]);
    const { category } = useParams<{ category: string }>();
    // const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/destination/category/${category}`);
                console.log('API Response:', response.data);


                if (Array.isArray(response.data) && response.data.length > 0) {
                    // setDestination(response.data);
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
                    <CategoryDisplay/>
            </div>
            </div>
        </>
    );
};

export default Categories;