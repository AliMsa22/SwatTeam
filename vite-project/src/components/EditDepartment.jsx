import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Dummy department data for simulation
const dummyDepartmentData = [
    { id: 1, name: 'Human Resources', head: 'Alice Johnson' },
    { id: 2, name: 'Finance', head: 'Bob Smith' },
    { id: 3, name: 'Marketing', head: 'Charlie Lee' },
    { id: 4, name: 'Development', head: 'David Brown' },
];

const EditDepartment = () => {
    const { id } = useParams();  // Assume we get the department ID from URL
    const navigate = useNavigate();

    const [department, setDepartment] = useState({
        name: '',
        head: '',
    });

    useEffect(() => {
        // Simulate fetching department by ID
        const deptToEdit = dummyDepartmentData.find(dept => dept.id === parseInt(id));
        if (deptToEdit) {
            setDepartment(deptToEdit);
        }
    }, [id]);

    const handleChange = (e) => {
        setDepartment({
            ...department,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate updating the department
        console.log('Updated department:', department);
        navigate('/dashboard/departments'); // Navigate back to departments list
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100 p-4'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
                <h2 className='text-2xl font-semibold text-center mb-4'>Edit Department</h2>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    {/* Department Name */}
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Department Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={department.name}
                            onChange={handleChange}
                            placeholder="Enter Department Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Department Head */}
                    <div>
                        <label htmlFor="head" className='block text-sm font-medium text-gray-700'>Head of Department</label>
                        <input
                            type="text"
                            id="head"
                            name="head"
                            value={department.head}
                            onChange={handleChange}
                            placeholder="Enter Head of Department"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Update Department
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditDepartment;
