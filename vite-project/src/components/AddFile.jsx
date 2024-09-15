import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const AddFile = () => {
    const { id } = useParams();  // Folder ID from the URL
    const navigate = useNavigate();

    // State to hold file information
    const [file, setFile] = useState({
        name: '',
        description: '',
        file: null // Holds the file object
    });

    const handleFileChange = (e) => {
        setFile({ ...file, file: e.target.files[0] }); // Set the file object
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle file addition logic here, such as making an API request
        console.log('Adding file:', { ...file, folderId: id });
        navigate(`/dashboard/folder/${id}`);  // Navigate back to the folder view
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Add New File</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="fileName" className="block text-sm font-medium text-gray-700">File Name</label>
                    <input
                        type="text"
                        id="fileName"
                        value={file.name}
                        onChange={(e) => setFile({ ...file, name: e.target.value })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fileDescription" className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        id="fileDescription"
                        value={file.description}
                        onChange={(e) => setFile({ ...file, description: e.target.value })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="fileUpload" className="block text-sm font-medium text-gray-700">Choose File</label>
                    <input
                        type="file"
                        id="fileUpload"
                        onChange={handleFileChange}
                        className="mt-1 block w-full text-sm text-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600 transition"
                    >
                        Add File
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddFile;
