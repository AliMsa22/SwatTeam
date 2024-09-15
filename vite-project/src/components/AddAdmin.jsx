import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Dummy data for categories
const dummyCategoryData = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' },
];

const AddAdmin = () => {
    const [dept, setDept] = useState([]);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        dept_id: ''
    });
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate API call with dummy data
        setDept(dummyCategoryData);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        console.log('Employee data:', user);
        navigate('/dashboard/users');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Add Department Head</h2>
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
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    
                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    
                    {/* Department Field */}
                    <div>
                        <label htmlFor="department" className="block text-sm font-medium text-gray-700">Department</label>
                        <select
                            id="department"
                            name="dept_id"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={user.dept_id}
                            onChange={(e) => setUser({ ...user, dept_id: e.target.value })}
                        >
                            <option value="">Select Department</option>
                            {dept.map(c => (
                                <option key={c.id} value={c.id}>{c.name}</option>
                            ))}
                        </select>
                    </div>
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddAdmin;
