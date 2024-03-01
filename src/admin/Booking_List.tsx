import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import AdminNavbar from "./AdminNavbar.tsx";
import "../admin/css/Bookinglist.css";

interface User {
    id: number;
    email: string;
    username: string;
}

const BookingList: React.FC = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [bookingDone, setBookingDone] = useState<boolean[]>([]);

    // Fetch users from the API
    const { data: users, refetch } = useQuery('GET_USERS', async () => {
        const response = await axios.get<User[]>('http://localhost:8080/booking/getAll');
        return response.data;
    });

    // Function to handle booking done
    const handleBookingDone = (index: number) => {
        setBookingDone(prev => {
            const updatedBookingDone = [...prev];
            updatedBookingDone[index] = true; // Mark the booking as done
            return updatedBookingDone;
        });
    };

    return (<>
            <AdminNavbar/>
            <div className="userList-contents">
                <div className="userListContainer">
                    <h3>Booking by users</h3>
                </div>
                <div className="userWrapper">
                    <div className="userlist-header">
                        <h2>Username</h2>
                        <h2>Email</h2>
                    </div>
                    {isFetching && <p>Loading...</p>}
                    {!isFetching && users && users.length === 0 && <p>No users found.</p>}
                    {users && users.length > 0 && users.map((user, index) => (
                        <div key={user.id} className="userlist-cardContainer">
                            <div className="userlist-information flex">
                                <h2>{user.username}</h2>
                                <h2>{user.email}</h2>
                            </div>
                            <div className="contactbooking">
                                <button onClick={() => handleBookingDone(index)}>
                                    {bookingDone[index] ? "Booking Done" : "Contact User"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default BookingList;
