import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import filePic from '../assets/signup.png';  // Dummy image for files

const FolderView = () => {
    // Example data for files
    const [files, setFiles] = useState([
        { id: 1, name: 'Document1.xlsx', description: 'Financial Report', imgSrc: filePic },
        { id: 2, name: 'Document2.xlsx', description: 'Project Plan', imgSrc: filePic },
        { id: 3, name: 'Document3.xlsx', description: 'Meeting Notes', imgSrc: filePic },
        { id: 4, name: 'Document4.xlsx', description: 'Expense Tracker', imgSrc: filePic },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (id) => {
        setFiles(files.filter(file => file.id !== id));
    };

    const handleEdit = (id) => {
        navigate(`/dashboard/edit_file/${id}`);
    };

    return (
        <div className="p-4">
            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search files..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* File Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredFiles.map(file => (
                    <div
                        key={file.id}
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
                    >
                        <img
                            className="w-24 h-24 object-cover rounded-full mb-4"
                            src={file.imgSrc}
                            alt={`${file.name} preview`}
                            style={{ maxWidth: '60%', height: 'auto' }}
                        />
                        <div className="text-center p-4">
                            <h2 className="text-xl font-semibold mb-2">{file.name}</h2>
                            <p className="text-gray-600">{file.description}</p>
                            <div className="mt-2 flex space-x-2">
                                {/* Edit Button */}
                                <button
                                    onClick={() => handleEdit(file.id)}
                                    className="bg-blue-500 text-white px-3 py-1 rounded-lg shadow hover:bg-blue-600 transition"
                                >
                                    Edit
                                </button>

                                {/* Delete Button */}
                                <button
                                    onClick={() => handleDelete(file.id)}
                                    className="bg-red-500 text-white px-3 py-1 rounded-lg shadow hover:bg-red-600 transition"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FolderView;
