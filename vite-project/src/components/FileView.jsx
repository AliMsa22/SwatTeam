import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PencilFill, TrashFill, PlusCircleFill, SaveFill } from 'react-bootstrap-icons';  // Importing Bootstrap Icons

const dummyExcelData = {
    1: {
        fileName: 'Document1.xlsx',
        sheets: [
            { name: 'Sheet1', columns: ['Name', 'Age', 'Salary'], data: [['John', 29, 3000], ['Jane', 25, 3200]] },
            { name: 'Sheet2', columns: ['Product', 'Price'], data: [['Laptop', 1000], ['Phone', 500]] },
            { name: 'Sheet3', columns: ['Country', 'Capital'], data: [['USA', 'Washington'], ['France', 'Paris']] },
        ],
    },
    2: {
        fileName: 'Document2.xlsx',
        sheets: [
            { name: 'Sheet1', columns: ['Task', 'Deadline'], data: [['Project A', '2023-09-01'], ['Project B', '2023-10-01']] },
            { name: 'Sheet2', columns: ['Phase', 'Status'], data: [['Planning', 'Complete'], ['Development', 'Ongoing']] },
        ],
    },
    // Add more dummy data as needed
};

const FileView = () => {
    const { id } = useParams();
    const fileData = dummyExcelData[id];  // Get dummy data based on file ID

    const [activeTab, setActiveTab] = useState(0);
    const [data, setData] = useState(fileData.sheets[activeTab].data);
    const [columns, setColumns] = useState(fileData.sheets[activeTab].columns);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedColumn, setSelectedColumn] = useState(columns[0]);  // Default to first column for search

    const handleCellEdit = (rowIndex, cellIndex, value) => {
        const updatedData = [...data];
        updatedData[rowIndex][cellIndex] = value;
        setData(updatedData);
    };

    const handleColumnEdit = (colIndex, value) => {
        const updatedColumns = [...columns];
        updatedColumns[colIndex] = value;
        setColumns(updatedColumns);
    };

    const handleAddColumn = () => {
        setColumns([...columns, `New Column`]);
        const updatedData = data.map(row => [...row, '']);
        setData(updatedData);
    };

    const handleDeleteColumn = (colIndex) => {
        setColumns(columns.filter((_, index) => index !== colIndex));
        const updatedData = data.map(row => row.filter((_, index) => index !== colIndex));
        setData(updatedData);
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = data.filter(row =>
        row[columns.indexOf(selectedColumn)]?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-semibold mb-4">{fileData.fileName}</h1>

            {/* Tabs for sheets */}
            <div className="flex space-x-4 mb-6">
                {fileData.sheets.map((sheet, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setActiveTab(index);
                            setData(fileData.sheets[index].data);
                            setColumns(fileData.sheets[index].columns);
                        }}
                        className={`px-4 py-2 rounded-lg ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} transition`}
                    >
                        {sheet.name}
                    </button>
                ))}
            </div>

            {/* Search and Filter */}
            <div className="mb-4 flex space-x-4">
                <select
                    className="p-2 border border-gray-300 rounded-lg"
                    value={selectedColumn}
                    onChange={(e) => setSelectedColumn(e.target.value)}
                >
                    {columns.map((col, index) => (
                        <option key={index} value={col}>{col}</option>
                    ))}
                </select>
                <input
                    type="text"
                    placeholder={`Search by ${selectedColumn}...`}
                    value={searchQuery}
                    onChange={handleSearch}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                />
            </div>

            {/* Display the table for the active tab */}
            <div className="bg-white p-4 rounded-lg shadow-md">
                <table className="min-w-full table-auto">
                    <thead>
                        <tr>
                            {columns.map((col, index) => (
                                <th key={index} className="px-4 py-2 border-b border-gray-200 text-left text-gray-600">
                                    <div className="flex items-center">
                                        <input
                                            type="text"
                                            value={col}
                                            onChange={(e) => handleColumnEdit(index, e.target.value)}
                                            className="border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        />
                                        <button
                                            onClick={() => handleDeleteColumn(index)}
                                            className="ml-2 text-red-500 hover:text-red-700 transition"
                                        >
                                            <TrashFill />
                                        </button>
                                    </div>
                                </th>
                            ))}
                            <th>
                                <button
                                    onClick={handleAddColumn}
                                    className="text-green-500 hover:text-green-700 transition"
                                >
                                    <PlusCircleFill />
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, cellIndex) => (
                                    <td key={cellIndex} className="px-4 py-2 border-b border-gray-200">
                                        <input
                                            type="text"
                                            value={cell}
                                            onChange={(e) => handleCellEdit(rowIndex, cellIndex, e.target.value)}
                                            className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Save Button */}
            <div className="mt-6">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
                    onClick={() => console.log('Data saved:', data, 'Columns saved:', columns)}
                >
                    <SaveFill className="mr-2" /> Save Changes
                </button>
            </div>
        </div>
    );
};

export default FileView;
