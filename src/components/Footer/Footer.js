import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="flex justify-center items-center p-5">
            <p className="text-sm">
                &copy; 2023 All Right Reserved by{' '}
                <Link className="text-blue-500" to="/">
                    N-Resume-Bulder
                </Link>
            </p>
        </div>
    );
};

export default Footer;
