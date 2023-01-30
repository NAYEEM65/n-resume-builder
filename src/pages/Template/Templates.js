import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import template1Image from '../../assets/template1.png';
import template2Image from '../../assets/template2.png';
const Templates = () => {
    return (
        <Layout>
            <div className="grid md:grid-cols-4 md:gap-8 my-10 w-full px-10 mx-auto">
                <div className="group relative transition-all max-h-[500px] w-[350px]">
                    <img src={template1Image} className="h-[500px]" alt="template1" />
                    <div className="h-full w-full absolute top-0 left-0 transition-all group-hover:bg-gray-400/50"></div>
                    <Link
                        to="/template/1"
                        className="absolute z-10 left-[30%] top-[50%] px-3 py-2 transition-all rounded hidden group-hover:flex group-hover:bg-gray-400/50"
                    >
                        Use this template
                    </Link>
                </div>
                <div className="group relative transition-all max-h-[500px] w-[350px]">
                    <img src={template2Image} className="h-[500px]" alt="template2" />
                    <div className="h-full w-full absolute top-0 left-0  group-hover:bg-gray-400/50"></div>
                    <Link
                        to="/template/2"
                        className="absolute z-10 left-[30%] top-[50%] px-3 py-2 transition-all rounded hidden group-hover:flex group-hover:bg-gray-400/50"
                    >
                        Use this template
                    </Link>
                </div>
                <div className="group relative transition-all max-h-[500px] w-[350px]">
                    <img src={template1Image} className="h-[500px]" alt="template1" />
                    <div className="h-full w-full absolute top-0 left-0  group-hover:bg-gray-400/50"></div>
                    <Link
                        to="/template/3"
                        className="absolute z-10 left-[30%] top-[50%] px-3 py-2 transition-all rounded hidden group-hover:flex group-hover:bg-gray-400/50"
                    >
                        Use this template
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Templates;
