import React from 'react';
import "../css/ContactUs.css";
import Navbar from "./Navbar.tsx";

const ContactUs: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="contact-support-container">
                <h2>CONTACT US</h2>
                <p>
                    For detail information contact TripHive through email or make a call.
                </p>
                <p>
                    Note: If you want to discuss your upcoming adventure, have inquiries, or simply fancy a friendly chat,
                    feel free to schedule a meeting with us.
                </p>
                <div className="contact-info">
                    <p>Email: <a href="mailto:triphive@gmail.com">triphive@gmail.com</a></p>
                    <p>Phone: 9087654321</p>
                </div>
            </div>
        </>
    );
};

export default ContactUs;