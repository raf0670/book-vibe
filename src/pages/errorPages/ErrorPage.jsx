import React from 'react';
import { Home, RefreshCcw, AlertCircle } from 'lucide-react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
            <div className="max-w-md w-full text-center">
                {/* Visual Element */}
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <span className="text-[12rem] font-bold text-slate-900 select-none">404</span>
                    </div>
                    <div className="relative flex justify-center">
                        <div className="p-4 bg-red-100 rounded-full text-red-600">
                            <AlertCircle size={64} strokeWidth={1.5} />
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <h1 className="text-3xl font-bold text-slate-900 mb-3">
                    Oops! Something went wrong.
                </h1>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    The page you're looking for doesn't exist or has been moved.
                    Don't worry, even the best explorers get lost sometimes.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => window.location.reload()}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white border border-slate-200 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-all shadow-sm"
                    >
                        <RefreshCcw size={18} />
                        Try Again
                    </button>

                    <a
                        href="/"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-xl hover:bg-indigo-700 transition-all shadow-md shadow-indigo-200"
                    >
                        <Home size={18} />
                        Back to Home
                    </a>
                </div>

                {/* Optional Support Link */}
                <p className="mt-12 text-sm text-slate-400">
                    Think this is a mistake? <a href="/support" className="underline hover:text-slate-600">Contact Support</a>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;