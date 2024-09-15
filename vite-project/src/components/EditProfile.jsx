import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Dummy data for profile (you would normally fetch this from a server)
const dummyProfile = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
};

const EditProfile = () => {
    const { id } = useParams(); // Get ID from URL params
    const navigate = useNavigate();

    // State for profile details
    const [profile, setProfile] = useState({
        id: dummyProfile.id, // Default to dummy data id
        name: dummyProfile.name,
        email: dummyProfile.email,
    });

    useEffect(() => {
        if (id) {
            // Convert ID from URL to a number
            const profileId = parseInt(id, 10);

            // Update state with the correct ID
            setProfile(prevProfile => ({
                ...prevProfile,
                id: profileId
            }));
        }
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save changes logic here (e.g., send data to a server)
        console.log('Profile updated:', profile);
        navigate(`/dashboard/profile`);  // Navigate back to the profile view
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Edit Profile</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={profile.name}
                            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={profile.email}
                            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
