import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy data for profile
const dummyUser = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
};

const Profile = () => {
    // Dummy data for profile
    const dummyUser = {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
    };
    const navigate = useNavigate();
    const id = dummyUser.id;
    const handleEdit = () => {
        // Navigate to edit page (assuming there's an edit page)
        navigate(`/dashboard/edit_profile/${id}`);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <div className="flex flex-col items-center mb-6">
                    <h1 className="text-2xl font-semibold mb-2">{dummyUser.name}</h1>
                    <p className="text-gray-600">{dummyUser.email}</p>
                </div>
                {/* Center the button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleEdit}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
