import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/signup.png';

const Home = () => {
    // Example data array
    const folders = [
        { id: 1, name: 'Airport', description: '..', imgSrc: profilePic },
        { id: 2, name: 'Cars', description: '..', imgSrc: profilePic },
        { id: 3, name: 'Family', description: '..', imgSrc: profilePic },
        { id: 4, name: 'Groceries', description: '..', imgSrc: profilePic },
        { id: 5, name: 'Hobbies', description: '..', imgSrc: profilePic },
        { id: 6, name: 'Home', description: '..', imgSrc: profilePic },
    ];

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter folders based on search query
    const filteredFolders = folders.filter(folder =>
        folder.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* Search Input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search folders..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Folder Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredFolders.map(folder => (
                    <Link
                        key={folder.id}
                        to={`/dashboard/folder/${folder.id}`}  // Adjust the path as needed
                        className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center"
                    >
                        <img
                            className="w-24 h-24 object-cover rounded-full mb-4"
                            src={folder.imgSrc}
                            alt={`${folder.name}'s profile`}
                            style={{ maxWidth: '60%', height: 'auto' }}
                        />
                        <div className="text-center p-4">
                            <h2 className="text-xl font-semibold mb-2">{folder.name}</h2>
                            <p className="text-gray-600">{folder.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Home;
