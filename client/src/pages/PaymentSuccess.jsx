import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border-t-8 border-blue-500 transform transition-all hover:-translate-y-1">
                <div className="relative mb-6">
                    <FaCheckCircle className="text-blue-500 text-7xl mx-auto drop-shadow-sm" />
                </div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Booking Confirmed!</h1>
                <p className="text-gray-600 mb-8 text-lg">Your ticket has been booked successfully. A confirmation email has been sent to your registered email address.</p>
                <div className="space-y-4">
                    <Link to="/dashboard" className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg hover:shadow-xl">
                        View My Tickets
                    </Link>
                    <Link to="/" className="block w-full bg-blue-50 hover:bg-blue-100 text-blue-600 font-bold py-4 px-6 rounded-xl transition">
                        Discover More Events
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
