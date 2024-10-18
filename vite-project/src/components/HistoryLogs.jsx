import React from 'react';

const dummyLogs = [
    { user: 'Alice', action: 'Added File', date: '2024-10-12', time: '10:30 AM', description: 'Added file "report.docx" to folder A' },
    { user: 'Bob', action: 'Deleted File', date: '2024-10-12', time: '11:15 AM', description: 'Deleted file "image.png" from folder B' },
    { user: 'Charlie', action: 'Edited Folder', date: '2024-10-12', time: '12:45 PM', description: 'Renamed folder from "Old Project" to "New Project"' },
    { user: 'Alice', action: 'Added Folder', date: '2024-10-12', time: '1:10 PM', description: 'Created folder "Resources"' },
    { user: 'David', action: 'Viewed File', date: '2024-10-12', time: '2:05 PM', description: 'Viewed file "Doc1.xlsx"' },
    // Add more logs as needed
];

const HistoryLogs = () => {
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">User Activity Log</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">User</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Action</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Date</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Time</th>
                            <th className="px-4 py-2 border-b border-gray-300 text-left text-gray-600">Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dummyLogs.map((log, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-2 border-b border-gray-200">{log.user}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{log.action}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{log.date}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{log.time}</td>
                                <td className="px-4 py-2 border-b border-gray-200">{log.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoryLogs;
