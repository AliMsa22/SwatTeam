import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditFile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Example data for file (would normally be fetched from a server)
    const [file, setFile] = useState({
        id,
        name: 'Document1.xlsx',
        description: 'Financial Report',
        imgSrc: './assets/file.png'  // Dummy image
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save changes logic here
        navigate('/dashboard/folder/1');  // Navigate back to the folder view
    };

    return (
        <div className="p-6 bg-white shadow-lg rounded-lg max-w-md mx-auto mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Edit File</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="fileName" className="block text-sm font-medium text-gray-700">File Name</label>
                    <input
                        type="text"
                        id="fileName"
                        value={file.name}
                        onChange={(e) => setFile({ ...file, name: e.target.value })}
                        className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditFile;
