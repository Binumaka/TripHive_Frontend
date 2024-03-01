import React, {useState} from "react";
import Navbar from "./Navbar.tsx";
// import Slider from "./Slider.tsx";
import "../css/Booking.css";
import {IoBookmarksOutline} from "react-icons/io5";
import {useNavigate} from "react-router-dom";
import {useMutation} from "react-query";
import axios from "axios";
import {toast} from "react-toastify";


const Booking: React.FC = () => {
    useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        destination:'',
        address: '',
        phoneNumber: '',
        BudgetAmount: '',
    });

    const saveData = useMutation({
        mutationKey: "SAVEDATA",
        mutationFn: (requestData: any) => {
            return axios.post("http://localhost:8080/booking/booking", requestData, {});
        },
        onSuccess: () => {
            toast.success("Booked successfully!");
        },
        onError: () => {
            toast.error("Failed to Book. Please try again.");
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        saveData.mutate(formData); // Mutate with form data
    };

    return (
        <>
            <Navbar/>
            <div className="Container_Booking">
                <div className="Btn_booking">
                    <h3>Book Now</h3><IoBookmarksOutline/>
                </div>
                <div className="wrapperBooking">
                    <div className="Booking_containerinfo">
                        <h2>Your Information</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="inputBox_Booking">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required/>
                            <label>Email</label>
                        </div>
                        <div className="inputBox_Booking">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                required/>
                            <label>Username</label>
                        </div>
                        <div className="inputBox_Booking">
                            <input
                                type="text"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required/>
                            <label>Phone Number</label>
                        </div>
                        <div className="inputBox_Booking">
                            <input
                                type="text"
                                name="destination"
                                value={formData.destination}
                                onChange={handleChange}
                                required/>
                            <label>Destination</label>
                        </div>
                        <div className="inputBox_Booking">
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required/>
                            <label>Address</label>
                        </div>
                        <div className="inputBox_Booking">
                            <input
                                type="text"
                                name="BudgetAmount"
                                value={formData.BudgetAmount}
                                onChange={handleChange}
                                required/>
                            <label>Budget Amount </label>
                        </div>
                        <button type="submit" className="Booking-btn">
                            Book
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Booking;
