import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const Layout = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-300">
            <Navbar />
            <main className="dark:bg-slate-900 pt-16">
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;
