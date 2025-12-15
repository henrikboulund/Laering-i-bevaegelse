import React from 'react';
import { MILLogo } from './Icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                <div className="text-sm text-gray-500">
                    <p>Udviklet af Pernille, Maria og Trine</p>
                </div>
                <div>
                    <MILLogo className="h-10" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
