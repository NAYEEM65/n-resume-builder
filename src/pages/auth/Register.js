import React, { useContext, useState } from "react";
import Layout from "../../Layout/Layout";
import { Notify } from "notiflix";
import { AuthContext } from "../../context/authContext";
import { Link, useNavigate } from "react-router-dom";
import { Spin } from "antd";
import { useRegisterMutation } from "../../features/auth/autAPI";
const Register = () => {
  const [register, { data: user, isLoading, isError }] = useRegisterMutation();
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowCPassword, setIsShowCPassword] = useState(false);
  const { loading, setLoading, createUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.password === userInfo.confirmPassword) {
      register({
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      });
      Notify.success("Register success");
    } else {
      Notify.warning("password does not match");
      setLoading(false);
    }
  };
  const handelePassShow = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handeleCPassShow = () => {
    setIsShowCPassword(!isShowCPassword);
  };
  let passEye;
  let cpassEye;
  if (isShowPassword) {
    passEye = (
      <span
        onClick={handelePassShow}
        className="absolute right-3 cursor-pointer top-3"
      >
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
      <span
        onClick={handelePassShow}
        className="absolute cursor-pointer right-3 top-3"
      >
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
  if (isShowCPassword) {
    cpassEye = (
      <span
        onClick={handeleCPassShow}
        className="absolute cursor-pointer right-3 top-3"
      >
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
  if (!isShowCPassword) {
    cpassEye = (
      <span
        onClick={handeleCPassShow}
        className="absolute cursor-pointer right-3 top-3"
      >
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
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        {loading && (
          <Spin tip="Loading" size="small">
            <div className="content" />
          </Spin>
        )}
        <div className="container max-w-lg mx-auto flex-1 flex flex-col items-center justify-center px-2 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl -z-10"></div>
          <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="fullname"
                placeholder="Full Name"
                onChange={(e) =>
                  setUserInfo({ ...userInfo, name: e.target.value })
                }
              />

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
                  type={`${isShowPassword ? "text" : "password"}`}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  placeholder="Password"
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                />
                {passEye}
              </div>
              <div className="relative">
                <input
                  type={`${isShowCPassword ? "text" : "password"}`}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                {cpassEye}
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
                Create Account
              </button>
            </form>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="/tos"
              >
                Terms of Service
              </Link>{" "}
              and
              <Link
                className="no-underline border-b border-grey-dark text-grey-dark"
                to="/tos"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="text-grey-dark mt-6 text-center">
              Already have an account?
              <Link
                className="no-underline border-b border-blue text-blue-500"
                to="/login"
              >
                Log in
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
