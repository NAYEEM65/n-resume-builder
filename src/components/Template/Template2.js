import React, { useContext } from 'react';
import { AuthContext } from '../../context/authContext';

const Template2 = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="py-10 px-5 text-center">
                <h2 className="text-4xl font-bold bg-blue-200 py-1">CURRICULUM VITAE</h2>
                <h3 className="text-3xl font-bold">
                    of <br />
                    {user.name}
                </h3>
                <p className="mt-1 text-lg">{user.address}</p>
                <p className="py-1 text-lg">Contact No: {user.mobileNumber}</p>
                <p className=" text-lg">E-mail: {user.email}</p>{' '}
                <div className="w-full h-[2px] bg-gray-500 mt-4" />
                <div className="w-full h-[2px] bg-gray-500 my-1" />
            </div>
            <div className="py-2">
                <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
                    <span className="w-fit border-b-2 border-gray-500">Career Objective</span>
                </h2>
                <p className="text-base py-2">{user.carrierObjective}</p>
            </div>

            {user.education && (
                <div className="py-2">
                    {user.education.map((edu) => (
                        <div className="py-2">
                            <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
                                <span className="w-fit border-b-2 border-gray-500">
                                    {edu.level.toLowerCase() === 'hsc'
                                        ? `Higher Secondary Certificate(H.S.C):`
                                        : edu.level.toLowerCase() === 'ssc'
                                        ? `Secondary School Certificate(S.S.C):`
                                        : `Hon's in ${edu.level}:`}
                                </span>
                            </h2>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Group</p>
                                <p className="w-[50%] text-left py-1">: {edu.group}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Passing Year</p>
                                <p className="w-[50%] text-left py-1">: {edu.passingYear}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Achievement</p>
                                <p className="w-[50%] text-left py-1">: {edu.grade}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Institution</p>
                                <p className="w-[50%] text-left py-1">: {edu.board}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {user.permanentAdd && (
                <div className="py-2">
                    <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
                        <span className="w-fit border-b-2 border-gray-500">Parmanent Address</span>
                    </h2>
                    {user.permanentAdd.map((add, index) => (
                        <div key={index}>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Village</p>
                                <p className="w-[50%] text-left py-1">: {add.village}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Post</p>
                                <p className="w-[50%] text-left py-1">: {add.post}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">P.S</p>
                                <p className="w-[50%] text-left py-1">: {add.ps}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">District</p>
                                <p className="w-[50%] text-left py-1">: {add.district}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            {user.presentAdd && (
                <div className="py-2">
                    <h2 className="text-3xl font-bold bg-blue-200 pt-1 pb-2 px-1">
                        <span className="w-fit border-b-2 border-gray-500">Present Address</span>
                    </h2>
                    {user.presentAdd.map((add, index) => (
                        <div key={index}>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Village</p>
                                <p className="w-[50%] text-left py-1">: {add.village}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">Post</p>
                                <p className="w-[50%] text-left py-1">: {add.post}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">P.S</p>
                                <p className="w-[50%] text-left py-1">: {add.ps}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="w-[50%] py-1">District</p>
                                <p className="w-[50%] text-left py-1">: {add.district}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            <div className="py-4">
                <p>Singature</p>
                <br />
                <p>({user.name})</p>
                <p>Date..............................</p>
            </div>
        </div>
    );
};

export default Template2;
