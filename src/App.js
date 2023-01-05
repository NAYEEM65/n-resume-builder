import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './components/Home/Home';
import Profile from './components/User/Profile';
import PrivateRoute from './components/ProtectedRoute/PrivateRoute';
import LoggedInRoute from './components/ProtectedRoute/LoggedInRoute';
import Template from './components/Template/Template';
import 'antd/dist/antd';
function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route
                path="/login"
                element={
                    <LoggedInRoute>
                        <Login />
                    </LoggedInRoute>
                }
            />
            <Route
                path="/register"
                element={
                    <LoggedInRoute>
                        <Register />
                    </LoggedInRoute>
                }
            />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                }
            />
            <Route
                path="/template"
                element={
                    <PrivateRoute>
                        <Template />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
}

export default App;
