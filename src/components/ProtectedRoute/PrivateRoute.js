import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import { useCookies } from 'react-cookie';
const PrivateRoute = ({ children }) => {
    const [cookies] = useCookies(['token']);
    const { user } = useContext(AuthContext);
    const { token } = cookies;
    console.log(token);
    if (!user && !token) {
        return <Navigate to="/login" />;
    } else {
        return <>{children}</>;
    }
};

export default PrivateRoute;
