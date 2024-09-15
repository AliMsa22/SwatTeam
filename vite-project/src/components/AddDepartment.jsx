import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddDepartment = () => {
    const [departmentName, setDepartmentName] = useState('');
    const [headOfDepartment, setHeadOfDepartment] = useState('');
    const navigate = useNavigate();

    // Handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulating API call to add the department with dummy data
        const newDepartment = {
            name: departmentName,
            head: headOfDepartment,
        };

        console.log("New Department: ", newDepartment);

        // After "successfully adding", navigate to the department list
        navigate('/dashboard/departments');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Add Department</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Department Name Input */}
                    <div>
                        <label htmlFor="departmentName" className="block text-sm font-medium text-gray-700">
                            Department Name
                        </label>
                        <input
                            type="text"
                            id="departmentName"
                            placeholder="Enter Department Name"
                            value={departmentName}
                            onChange={(e) => setDepartmentName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    
                    {/* Head of Department Input */}
                    <div>
                        <label htmlFor="headOfDepartment" className="block text-sm font-medium text-gray-700">
                            Head of Department
                        </label>
                        <input
                            type="text"
                            id="headOfDepartment"
                            placeholder="Enter Head of Department"
                            value={headOfDepartment}
                            onChange={(e) => setHeadOfDepartment(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Add Department
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddDepartment;
