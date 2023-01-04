import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const LoggedInRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to="/profile" />;
    } else {
        return <>{children}</>;
    }
};

export default LoggedInRoute;
