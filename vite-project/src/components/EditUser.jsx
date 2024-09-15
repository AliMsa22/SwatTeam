import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Dummy data for now
const dummyDepartmentData = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
];

const dummyUserData = {
    name: 'John Doe',
    email: 'john@example.com',
    dept_id: '1',
};

const EditUser = () => {
    // Dummy ID from params for simulation
    const { id } = useParams();
    
    // State for departments and user
    const [department, setDepartment] = useState(dummyDepartmentData);
    const [user, setUser] = useState(dummyUserData);
    
    const navigate = useNavigate();

    // Handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('User updated:', user);
        navigate('/dashboard/users');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Edit User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={user.name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            autoComplete="off"
                            placeholder="Enter Email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={user.email}
                            onChange={handleChange}
                        />
                    </div>
                    
                    {/* Department Field */}
                    <div>
                        <label htmlFor="dept_id" className="block text-sm font-medium text-gray-700">Department</label>
                        <select
                            id="dept_id"
                            name="dept_id"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={user.dept_id}
                            onChange={handleChange}
                        >
                            <option value="">Select Department</option>
                            {department.map((dept) => (
                                <option key={dept.id} value={dept.id}>{dept.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Edit User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditUser;
