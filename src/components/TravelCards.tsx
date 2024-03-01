import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/TravelCards.css';
import { IoArrowBackOutline } from "react-icons/io5";


const TravelCards = ({ destination, headline }: { destination: any[] | null; headline: string }) => {
    const [visibledestination, setVisibledestination] = useState(3);
    const [seeMoreClicked, setSeeMoreClicked] = useState(false);
    // const [cartItems, setCartItems] = useState<any[]>([]);


    const handleSeeMore = () => {
        setVisibledestination((prevVisibledestination) => prevVisibledestination + 3);
        setSeeMoreClicked(true);
    };

    const handleGoBack = () => {
        setVisibledestination(3);
        setSeeMoreClicked(false);
    };

    // const handleAddToBooking = (plantItem: any) => {
    //     setBookingItems((prevBookingItems) => [...prevBookingItems, plantItem]);
    //     console.log(`Added plant with ID ${plantItem._id} to the cart.`);
    // };

    return (
        <div className="travelcards-container">
            <h2 className="travelcards-headline">{headline}</h2>
            {destination && visibledestination < destination.length && (
                <button onClick={handleSeeMore} className="see-more-button">
                    See More
                </button>
            )}
            {seeMoreClicked && (
                <Link to="/" className="back-icon" onClick={handleGoBack}>
                    <IoArrowBackOutline />
                </Link>
            )}
            <div className="destinationcontainerContent">
            <div className="desrinationrow">
            <div className="destinationitem-container">
                {Array.isArray(destination) && destination.length > 0 ? (
                    <>
                        {destination.slice(0, visibledestination).map((destinationItem) => (
                            <div key={destinationItem.id} className="destination-item">
                                <Link to={`/travelling/${destinationItem.id}`}>
                                        <img src={destinationItem.imageurl} alt=" "/>
                                    <div className="destination-info">
                                        <h2>{destinationItem.destinationname}</h2>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </>
                ) : (
                    <p>No destination available.</p>
                )}
            </div>
        </div>
        </div>
        </div>
    );
};

export default TravelCards;