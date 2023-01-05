import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Template1 = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="pt-10 px-5">
            <div className="flex justify-between">
                <h1 className="text-4xl uppercase">{user.name}</h1>
                <div className="text-gray-500">
                    <p className="text-lg">{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.mobileNumber}</p>
                </div>
            </div>
            <div className="w-full h-[2px] bg-gray-500 my-4" />
            <div className="mt-5">
                <h3 className="text-xl py-1 font-bold">Objective</h3>
                <p className="text-sm">{user.carrierObjective}</p>
            </div>
            <div className="w-full h-[2px] bg-gray-500 my-4" />
            <div className="mt-5">
                <h3 className="text-xl py-1 font-bold">Eductaion</h3>
                <p className="text-sm">{user.carrierObjective}</p>
            </div>
            <div className="w-full h-[2px] bg-gray-500 my-4" />
        </div>
    );
};

export default Template1;
