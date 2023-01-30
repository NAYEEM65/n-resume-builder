import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile";
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute";
import AuthRoute from "./components/ProtectedRoute/AuthRoute";
import "antd/dist/antd";
import Templates from "./pages/Template/Templates";
import Template from "./pages/Template/Template";
import Dashboard from "./pages/Dashboard/Dashboard";
import useAuthChecked from "./hooks/useAuthChecked";
function App() {
  const authCheck = useAuthChecked();
  return !authCheck ? (
    <p>Loading...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/login"
        element={
          <AuthRoute>
            <Login />
          </AuthRoute>
        }
      />
      <Route
        path="/register"
        element={
          <AuthRoute>
            <Register />
          </AuthRoute>
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
      <Route path="/template" element={<Templates />} />
      <Route path="/template/:id" element={<Template />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
