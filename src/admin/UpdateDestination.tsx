import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import "./css/Update.css";
import AdminNavbar from "./AdminNavbar.tsx";

const UpdateDestination: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    // const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState<boolean>(false);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        destinationname: '',
        description: '',
        imageurl: '',
        category: '',
        section: 'section1',
    });

    const fetchDestinationData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/destination/traveling/${id}`);
            const destinationData = response.data;

            setFormData({
                destinationname: destinationData.destinationname,
                description: destinationData.description,
                imageurl: destinationData.imageurl,
                category: destinationData.category,
                section: destinationData.section,
            });
        } catch (error) {
            console.error('Error fetching plant data:', error);
        }
    };

    useEffect(() => {
        fetchDestinationData();
    }, [id]);

    const updatePlantData = useMutation({
        mutationKey: 'UPDATE_PLANT',
        mutationFn: async (requestData: any) => {
            await axios.put(`http://localhost:8080/destination/update/${id}`, requestData);
        },
        onSuccess: () => {
            toast.success('Destination details updated successfully!');
            navigate('/admin');
        },
        onError: () => {
            toast.error('Failed to update plant details. Please try again.');
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        updatePlantData.mutate(formData);
    };

    // const openAdminSideBar = () => {
    //     setOpenAdminSideBarToggle(!openAdminSideBarToggle);
    // };

    return (
        <>
        <AdminNavbar/>
            <div className='slibebar_upload'>
                {/*<AdminSideBar openSidebarToggle={openAdminSideBarToggle} OpenSidebar={openAdminSideBar} />*/}
            </div>
            <div className="main_uploadContainer">
                <div className="wrapperUpload">
                    <div className="form-box_upload">
                        <h2>Update destination</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox_upload">
                                <label>Destination Name</label>
                                <input
                                    type="text"
                                    name="destinationname"
                                    value={formData.destinationname}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>ImageURL</label>
                                <input
                                    type="text"
                                    name="imageurl"
                                    value={formData.imageurl}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputBox_upload">
                                <label>Category</label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />

                            </div>
                            <div className="inputbox_upload">
                                <select name="section" value={formData.section} onChange={handleChange} required>
                                    <option value="section1">Top Destination</option>
                                    <option value="section2">More To Explore</option>
                                </select>
                            </div>
                            <button type="submit" className="upload-btn">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UpdateDestination;