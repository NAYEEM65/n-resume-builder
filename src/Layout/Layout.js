import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="min-h-[85vh]">{children}</div>
            <Footer />
        </>
    );
};

export default Layout;
