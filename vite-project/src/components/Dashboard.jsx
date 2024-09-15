import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Dashboard = () => {
    const userName = "Current User"; // Update once backend data is fetched
    const isAdmin = true; 
    const isSuperAdmin = true;
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/');
    }

    return (
        <div className="flex h-screen">
            <div className="w-64 bg-gray-800 text-white flex flex-col">
                <div className="flex items-center justify-center p-4 bg-gray-900">
                    <Link to="/dashboard" className="text-xl font-bold">{userName}</Link>
                </div>
                <ul className="flex-1 space-y-2 p-4">
                    <li className="hover:bg-gray-700">
                        <Link to="/dashboard" className="flex items-center p-2 text-white">
                            <i className="bi bi-speedometer2 text-xl mr-2"></i>
                            <span className="hidden sm:inline">Dashboard</span>
                        </Link>
                    </li>
                    {(isAdmin || isSuperAdmin) && (
                        <>
                            <li className="hover:bg-gray-700">
                                <Link to="/dashboard/history_logs" className="flex items-center p-2 text-white">
                                    <i className="bi bi-clock-history text-xl mr-2"></i>
                                    <span className="hidden sm:inline">History Logs</span>
                                </Link>
                            </li>
                            <li className="hover:bg-gray-700">
                                <Link to="/dashboard/users" className="flex items-center p-2 text-white">
                                    <i className="bi bi-people text-xl mr-2"></i>
                                    <span className="hidden sm:inline">Manage Users</span>
                                </Link>
                            </li>
                            <li className="hover:bg-gray-700">
                                <Link to="/dashboard/folders" className="flex items-center p-2 text-white">
                                    <i className="bi bi-folder text-xl mr-2"></i>
                                    <span className="hidden sm:inline">Manage Folders</span>
                                </Link>
                            </li>
                        </>
                    )}
                    {isSuperAdmin && (
                        <li className="hover:bg-gray-700">
                            <Link to="/dashboard/departments" className="flex items-center p-2 text-white">
                                <i className="bi bi-diagram-3 text-xl mr-2"></i>
                                <span className="hidden sm:inline">Manage Departments</span>
                            </Link>
                        </li>
                        )}
                    <li className="hover:bg-gray-700">
                        <Link to="/dashboard/profile" className="flex items-center p-2 text-white">
                            <i className="bi bi-person text-xl mr-2"></i>
                            <span className="hidden sm:inline">Profile</span>
                        </Link>
                    </li>
                    <li className="hover:bg-gray-700" onClick={handleLogout}>
                        <Link className="flex items-center p-2 text-white">
                            <i className="bi bi-power text-xl mr-2"></i>
                            <span className="hidden sm:inline">Logout</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-4">
                <div className="bg-white shadow rounded p-2 mb-2 flex items-center justify-center">
                    <h4 className="text-lg font-semibold">Workforce Manager & Data Viewer</h4>
                </div>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
