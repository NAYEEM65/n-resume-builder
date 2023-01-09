import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import Layout from '../../Layout/Layout';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Tabs, Progress } from 'antd';
import axios from 'axios';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [img, setImg] = useState('');
    const [progress, setProgress] = useState();
    const handleChange = async (e) => {
        setImg(e.target.files[0]);
        let formData = new FormData();
        formData.append('image', e.target.files[0], user.name);
        const url = `https://api.imgbb.com/1/upload?key=4d03bd79e7e9eae2db3e34489f0e64b8`;
        try {
            await axios
                .post(url, formData, {
                    onUploadProgress: (data) => {
                        //Set the progress value to show the progress bar
                        setProgress(Math.round((100 * data.loaded) / data.total));
                    },
                })
                .then((data) => setImageUrl(data.data.data.url));
        } catch (error) {}
    };

    console.log({ ...user });
    console.log(imageUrl);
    const submitHandler = async (e) => {
        e.preventDefault(); //prevent the form from submitting
        setLoading(true);
        try {
            if (imageUrl) {
                await axios.post('/api/update-profile', {
                    ...user,
                    _id: user._id,
                    imageUrl: imageUrl,
                });
                setLoading(false);
                message.success('Profile updated successfully');
            } else {
                message.warning('Profile updated successfully');
            }
        } catch (error) {
            setLoading(false);
            message.error('updated failed');
        }
    };

    return (
        <Layout>
            <div>
                <h1 className="text-green-500 text-center text-5xl">Dashboard</h1>

                <div className="flex justify-between gap-4 flex-col px-10 ">
                    <div className="relative">
                        <img
                            className="hidden h-24 w-24 rounded-full sm:block object-cover mr-2 border-4 border-green-400"
                            src={user.imageUrl}
                            alt={user.name}
                        />
                        <p className="font-bold text-base  text-gray-400 pt-2 text-center w-24">
                            {user.name}
                        </p>
                        <form onSubmit={submitHandler}>
                            <div className="flex justify-start items-center flex-col gap-2 w-[150px]">
                                <div class="flex items-center justify-center w-full flex-col">
                                    <label
                                        for="dropzone-file"
                                        class="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                    >
                                        <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg
                                                aria-hidden="true"
                                                class="w-10 h-10 mb-3 text-gray-400"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                                ></path>
                                            </svg>
                                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span class="font-semibold">Click to upload</span>{' '}
                                                <br /> or drag and drop
                                            </p>
                                        </div>
                                        <input
                                            id="dropzone-file"
                                            onChange={handleChange}
                                            name="file"
                                            type="file"
                                            class="hidden"
                                        />
                                    </label>
                                    {progress && <Progress percent={progress} />}
                                </div>

                                {/* <input
                                    onChange={handleChange}
                                    name="file"
                                    className="custom-file-input"
                                    required
                                    type="file"
                                /> */}
                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
