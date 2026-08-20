import React from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentFailed = () => {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
            <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full text-center border-t-8 border-purple-500 transform transition-all hover:-translate-y-1">
                <div className="relative mb-6">
                    <FaTimesCircle className="text-purple-500 text-7xl mx-auto drop-shadow-sm" />
                </div>
                <h1 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">Booking Failed</h1>
                <p className="text-gray-600 mb-8 text-lg">We couldn't process your payment. Please ensure your payment details are correct and try again.</p>
                <div className="space-y-4">
                    <Link to="/" className="block w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-xl transition shadow-lg hover:shadow-xl">
                        Return to Events
                    </Link>
                    <Link to="/dashboard" className="block w-full bg-purple-50 hover:bg-purple-100 text-purple-600 font-bold py-4 px-6 rounded-xl transition">
                        Go to Dashboard
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentFailed;
