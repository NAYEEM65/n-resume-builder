import React, { createContext, useEffect, useState } from 'react';

// import { Navigate, useLocation, useNavigate } from "react-router-dom";

import axios from 'axios';
import { Notify } from 'notiflix';
import { useNavigate } from 'react-router-dom';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const createUser = async (userInfo) => {
        setLoading(true);
        try {
            await axios.post('/api/register', userInfo);
            Notify.success('Registration Success');
            setLoading(false);
        } catch (error) {
            Notify.failure('failed to register');
            setLoading(false);
        }
    };

    const signIn = async (userInfo) => {
        setLoading(true);
        try {
            await axios.post('/api/login', userInfo);
            Notify.success('login Success');
            setLoading(false);
        } catch (error) {
            Notify.failure('failed to login');
            setLoading(false);
        }
    };

    useEffect(() => {
        const userInfo = async () => {
            const userdata = await axios.get('/api/user-details');
            setUser(userdata.data.user);
        };
        userInfo();
    }, [loading]);
    const logOut = () => {
        setLoading(true);
        axios
            .get('/api/logout')
            .then(() => {
                Notify.success('Successfully logged out.');
                navigate('/login');
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const authInfo = {
        createUser,
        signIn,
        logOut,
        user,
        setUser,
        loading,
        setLoading,
    };
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
