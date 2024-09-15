import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy department data
const dummyDepartmentData = [
    { id: 1, name: 'Human Resources' },
    { id: 2, name: 'Finance' },
    { id: 3, name: 'Marketing' },
    { id: 4, name: 'Development' },
];

const DepartmentManagement = () => {
    const [dept, setDept] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        // Simulate API call with dummy data
        setDept(dummyDepartmentData);
    }, []);

    // Handle delete department
    const handleDelete = (id) => {
        const filteredDept = dept.filter(department => department.id !== id);
        setDept(filteredDept); // Update state with the remaining departments
    };

    // Filter departments based on search query
    const filteredDepartments = dept.filter(department =>
        department.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='px-5 mt-5'>
            {/* Title Section */}
            <div className='flex justify-center mb-6'>
                <h3 className='text-2xl font-semibold'>Department Management</h3>
            </div>

            {/* Add Department Button */}
            <div className='mb-4'>
                <Link
                    to="/dashboard/add_department"
                    className='bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition'
                >
                    Add Department
                </Link>
            </div>

            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search department..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Department Table */}
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-300 rounded-lg shadow'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='p-3 text-left text-gray-700'>Department Name</th>
                            <th className='p-3 text-left text-gray-700'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredDepartments.length > 0 ? (
                            filteredDepartments.map((department) => (
                                <tr key={department.id} className='border-b hover:bg-gray-50'>
                                    <td className='p-3'>{department.name}</td>
                                    <td className='p-3 flex space-x-2'>
                                        {/* Edit Button as Link */}
                                        <Link
                                            to={`/dashboard/edit_department/${department.id}`}
                                            className='bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition'
                                        >
                                            Edit
                                        </Link>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(department.id)}
                                            className='bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition'
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" className='p-3 text-center text-gray-500'>No departments found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DepartmentManagement;
