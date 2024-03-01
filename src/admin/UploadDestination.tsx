import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Import Navbar component
import './css/Upload.css';
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios from "axios";
import { toast } from "react-toastify";
import AdminNavbar from "./AdminNavbar.tsx";

const Upload: React.FC = () => {
    useNavigate();
    const [formData, setFormData] = useState({
        destinationname: '',
        description: '',
        price: '',
        imageurl: '',
        category: '',
        section: 'section1' // Default value
    });

    const saveData = useMutation({
        mutationKey: "SAVEDATA",
        mutationFn: (requestData: any) => {
            return axios.post("http://localhost:8080/destination/travel", requestData, {});
        },
        onSuccess: () => {
            toast.success("Destination added successfully!");
        },
        onError: () => {
            toast.error("Failed to add destination. Please try again.");
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
            <AdminNavbar />
            <div className="main_uploadContainer">
                <div className="wrapperUpload">
                    <div className="form-box_upload">
                        <h2>Upload Destination</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="inputBox_upload">
                                <input
                                    type="text"
                                    name="destinationname"
                                    value={formData.destinationname}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Destination Name</label>
                            </div>
                            <div className="inputBox_upload">
                                <input
                                    type="text"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Destination Description</label>
                            </div>
                            <div className="inputBox_upload">
                                <input
                                    type="text"
                                    name="imageurl"
                                    value={formData.imageurl}
                                    onChange={handleChange}
                                    required
                                />
                                <label>ImageURL</label>
                            </div>
                            <div className="inputBox_upload">
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                />
                                <label>Category</label>
                            </div>
                            <div className="inputbox_upload">
                                <select name="section" value={formData.section} onChange={handleChange} required>
                                    <option value="TopDestination">Top Destination</option>
                                    <option value="MoretoExplore">More to Explore</option>
                                </select>
                            </div>
                            <button type="submit" className="upload-btn">
                                Upload
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Upload;
