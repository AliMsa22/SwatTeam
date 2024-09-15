import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Dummy folder data
const dummyFolderData = [
    { id: 1, name: 'Airport' },
    { id: 2, name: 'Cars' },
    { id: 3, name: 'Project C' },
    { id: 4, name: 'Project D' },
];

const FolderManagement = () => {
    const [folders, setFolders] = useState(dummyFolderData);
    const [search, setSearch] = useState('');

    const handleDelete = (id) => {
        const filteredFolders = folders.filter(folder => folder.id !== id);
        setFolders(filteredFolders);
    };

    const filteredFolders = folders.filter(folder =>
        folder.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='px-5 mt-5'>
            {/* Title Section */}
            <div className='flex justify-center mb-6'>
                <h3 className='text-2xl font-semibold'>Folder Management</h3>
            </div>

            {/* Add Folder Button */}
            <div className='mb-4'>
                <Link
                    to="/dashboard/add_folder"
                    className='bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600 transition'
                >
                    Add Folder
                </Link>
            </div>

            {/* Search Input */}
            <div className='mb-4'>
                <input
                    type="text"
                    placeholder="Search by folder name"
                    className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Folder Table */}
            <div className='overflow-x-auto'>
                <table className='min-w-full bg-white border border-gray-300 rounded-lg shadow'>
                    <thead>
                        <tr className='bg-gray-100'>
                            <th className='p-3 text-left text-gray-700'>Folder Name</th>
                            <th className='p-3 text-left text-gray-700'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredFolders.map((folder) => (
                            <tr key={folder.id} className='border-b hover:bg-gray-50'>
                                <td className='p-3'>{folder.name}</td>
                                <td className='p-3 flex space-x-2'>
                                    {/* Edit Button as Link */}
                                    <Link
                                        to={`/dashboard/edit_folder/${folder.id}`}
                                        className='bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition'
                                    >
                                        Edit
                                    </Link>

                                    {/* Add File Button */}
                                    <Link
                                        to={`/dashboard/add_file/${folder.id}`}
                                        className='bg-yellow-500 text-white px-3 py-1 rounded-lg shadow hover:bg-yellow-600 transition'
                                    >
                                        Add File
                                    </Link>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => handleDelete(folder.id)}
                                        className='bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition'
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

export default FolderManagement;
