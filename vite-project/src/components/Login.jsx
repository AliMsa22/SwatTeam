    import React from 'react';
    import { Link } from 'react-router-dom';

    export const Login = () => {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">

            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            
            <form>
            {/* User Field */}
            <div className="mb-4">
                <label htmlFor="user" className="block text-gray-700">User</label>
                <input
                type="userName"
                id="userName"
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-500"
                placeholder="Enter your User-Name"
                required
                />
            </div>

            {/* Password Field */}
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password</label>
                <input
                type="password"
                id="password"
                className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-green-500"
                placeholder="Enter your password"
                required
                />
            </div>

            {/* Submit Button */}
            <div className="mb-4">
                <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring"
                >
                Login
                </button>
            </div>
            </form>

            {/* Register Button */}
            <div className="text-center">
            <p className="text-gray-600">Don't have an account?</p>
            <Link to="/register">
                <button className="mt-2 text-green-500 hover:text-green-700">
                Register
                </button>
            </Link>
            </div>
        </div>
        </main>
    );
    };

    export default Login;
