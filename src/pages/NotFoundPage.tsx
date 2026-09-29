import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F6F7FB] py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full card-soft p-8 bg-white text-center space-y-4">
        <span className="text-4xl font-extrabold text-[#5B3DF5] font-mono">404</span>
        
        <h1 className="text-xl font-bold text-[#0B1B3A]">
          Page Not Found
        </h1>

        <p className="text-xs text-[#45516B]">
          The page you requested does not exist or has been moved.
        </p>

        <div className="pt-2">
          <a href="/" className="btn-primary text-xs">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </a>
        </div>
      </div>
    </div>
  );
};
