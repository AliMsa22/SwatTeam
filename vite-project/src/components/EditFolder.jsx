import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// Dummy data for simulation
const dummyFolderData = [
    { id: 1, name: 'HR' },
    { id: 2, name: 'Finance' }
];

const EditFolder = () => {
    const { id } = useParams(); // Get folder ID from route params
    const [folderName, setFolderName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching folder data by ID
        const folder = dummyFolderData.find(folder => folder.id === parseInt(id));
        if (folder) {
            setFolderName(folder.name);
        } else {
            setError('Folder not found.');
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (folderName.trim() === '') {
            setError('Folder name cannot be empty.');
            return;
        }

        // Simulate folder editing
        console.log(`Editing folder ID ${id} to new name: ${folderName}`);

        // Clear the error and navigate on successful folder edit
        setError('');
        // axios.put(`/api/edit-folder/${id}`, { name: folderName })
        //     .then(res => {
        //         if (res.data.success) {
        //             navigate('/dashboard/folders');
        //         } else {
        //             setError(res.data.message);
        //         }
        //     })
        //     .catch(err => setError('Error editing folder.'));

        navigate('/dashboard/folders');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-4">Edit Folder</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="folderName" className="block text-sm font-medium text-gray-700">Folder Name</label>
                        <input
                            type="text"
                            id="folderName"
                            placeholder="Enter Folder Name"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={folderName}
                            onChange={(e) => setFolderName(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditFolder;
