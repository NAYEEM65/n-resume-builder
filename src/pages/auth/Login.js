import axios from 'axios';
import { Notify } from 'notiflix';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import Layout from '../../Layout/Layout';
const Login = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const { user, setUser, loading, setLoading, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });
    const handleLogin = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const user = await axios.post('/api/login', userInfo);
            Notify.success('login Success');
            setLoading(false);
            setUser(user);
            navigate('/');
        } catch (error) {
            Notify.failure('failed to login');
            setLoading(false);
        }
        // signIn(userInfo)
        //     .then((data) => {
        //         console.log(data);
        //         navigate('/');
        //         setLoading(false);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
    };
    const handelePassShow = () => {
        setIsShowPassword(!isShowPassword);
    };
    let passEye;
    if (isShowPassword) {
        passEye = (
            <span onClick={handelePassShow} className="absolute right-3 top-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </span>
        );
    }
    if (!isShowPassword) {
        passEye = (
            <span onClick={handelePassShow} className="absolute right-3 top-3 cursor-pointer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                </svg>
            </span>
        );
    }

    return (
        <Layout>
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8 relative z-10">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl -z-10"></div>
                    <div className="bg-white rounded p-4 relative z-0">
                        <div>
                            <img
                                className="mx-auto h-12 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                            <p className="mt-2 text-center text-sm text-gray-600">
                                Or
                                <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                >
                                    start your 14-day free trial
                                </a>
                            </p>
                        </div>
                        <form onSubmit={handleLogin}>
                            <input
                                type="text"
                                className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                onChange={(e) =>
                                    setUserInfo({ ...userInfo, email: e.target.value })
                                }
                            />

                            <div className="relative">
                                <input
                                    type="password"
                                    className="block border border-grey-light w-full p-3 rounded mb-4"
                                    name="password"
                                    placeholder="Password"
                                    onChange={(e) =>
                                        setUserInfo({ ...userInfo, password: e.target.value })
                                    }
                                />
                                {passEye}
                            </div>

                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                    <svg
                                        className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Login;
