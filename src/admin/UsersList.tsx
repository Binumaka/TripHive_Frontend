import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { useQuery, useMutation } from 'react-query';
import axios from 'axios';
import AdminNavbar from "./AdminNavbar.tsx";
import "../admin/css/UsersList.css";

interface User {
    id: number;
    email: string;
    username: string;
}

const UserList: React.FC = () => {
    const [isFetching, setIsFetching] = useState(false);

    // Fetch users from the API
    const { data: users, refetch } = useQuery('GET_USERS', async () => {
        try {
            const response = await axios.get<User[]>('http://localhost:8080/user/getAll');
            console.log("User data from API:", response.data); // Log user data
            return response.data;
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    });

    // Mutation for deleting a user
    const deleteUser = useMutation(async (id: number) => {
        setIsFetching(true);
        await axios.delete(`http://localhost:8080/user/deleteById/${id}`);
    }, {
        onSuccess: () => {
            // Refetch the data after successful deletion
            refetch();
        },
        onSettled: () => {
            setIsFetching(false);
        },
    });

    return (
        <>
            <AdminNavbar/>
            <div className="userList-contents">
                <div className="userListContainer">
                    <h3>Users Of TripHive</h3>
                </div>
                <div className="userWrapper">
                    <div className="userlist-header">
                        <h2>Username</h2>
                        <h2>Email</h2>
                    </div>
                    {isFetching && <p>Loading...</p>}
                    {!isFetching && users && users.length === 0 && <p>No users found.</p>}
                    {users && users.length > 0 && users.map((user) => (
                        <div key={user.id} className="userlist-card">
                            <div className="userlist-info flex">
                                <h3>{user.username}</h3>
                                <h3>{user.email}</h3>
                                <div className="edit-delete">
                                    <button onClick={() => deleteUser.mutate(user.id)}>
                                        <MdDelete size="2rem"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UserList;
