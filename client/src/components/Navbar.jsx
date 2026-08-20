import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-xl">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
                    <Link to="/" className="text-white text-2xl font-bold flex items-center gap-3 group">
                        {/* Modern Sparkle/Ticket Icon Logo */}
                        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-all">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M7 3a1 1 0 000 2h6a1 1 0 000-2H7zM4 7a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V7zm2 1a1 1 0 011-1h2a1 1 0 011 1v1H6V8zm6 0a1 1 0 011-1h2a1 1 0 011 1v1h-4V8zM6 11a1 1 0 000 2h8a1 1 0 100-2H6z" />
                            </svg>
                        </div>
                        EVORA
                    </Link>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <Link to="/" className="text-white/80 hover:text-white transition cursor-pointer font-medium">Events</Link>
                        {user ? (
                            <>
                                <Link to={user.role === 'admin' ? '/admin' : '/dashboard'} className="text-white/80 hover:text-white transition font-medium">Dashboard</Link>
                                <button onClick={handleLogout} className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg font-semibold transition">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="text-white/80 hover:text-white transition font-medium">Login</Link>
                                <Link to="/register" className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-lg font-semibold transition shadow-lg">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
