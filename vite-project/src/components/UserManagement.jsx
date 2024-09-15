import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy data for now
const dummyData = [
    { id: 1, name: 'John Doe', email: 'john@example.com', isActive: false },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', isActive: true }
];

const isSuperAdmin = true;

const UserManagement = () => {
    const [users, setUsers] = useState(dummyData);

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    const handleToggleActive = (id) => {
        setUsers(users.map(user => 
            user.id === id ? { ...user, isActive: !user.isActive } : user
        ));
    };

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter users based on search query
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-5 mt-3">
            <div className="flex justify-center mb-4">
                <h3 className="text-2xl font-semibold">User Management</h3>
            </div>

            {isSuperAdmin && (
                <Link
                    to="/dashboard/add_admin"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600"
                >
                    Add Admin
                </Link>
            )}

            <div className="mt-5 overflow-x-auto">
                {/* Search Input */}
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow">
                    <thead>
                        <tr className="bg-gray-100 border-b">
                            <th className="p-3 text-left text-gray-700">Name</th>
                            <th className="p-3 text-left text-gray-700">Email</th>
                            <th className="p-3 text-left text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{user.name}</td>
                                <td className="p-3">{user.email}</td>
                                <td className="p-3 flex items-center gap-2">
                                    <button
                                        onClick={() => handleToggleActive(user.id)}
                                        className={`px-3 py-1 rounded-lg shadow text-white ${user.isActive ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'}`}
                                    >
                                        {user.isActive ? 'Inactive' : 'Active'}
                                    </button>
                                    <Link
                                        to={`/dashboard/edit_user/${user.id}`}
                                        className="inline-block bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 mr-2"
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="inline-block bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserManagement;
