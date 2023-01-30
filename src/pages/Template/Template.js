import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from 'antd';
import Layout from '../../Layout/Layout';
import Template1 from '../../components/Template/Template1';
import Template2 from '../../components/Template/Template2';
function Template() {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const params = useParams();
    const navigate = useNavigate();
    const gettemplate = () => {
        switch (params.id) {
            case '1': {
                return <Template1 />;
            }
            case '2': {
                return <Template2 />;
            }
            default:
                return;
        }
    };
    return (
        <Layout>
            <div className="border-2 border-gray-300 p-5 mt-5">
                <div className="flex justify-end my-5 mx-5 px-12 pb-5">
                    <Button className="back-btn" onClick={() => navigate('/')}>
                        Back
                    </Button>
                    <Button className="mx-5" onClick={handlePrint}>
                        Print
                    </Button>
                </div>
                <div className="px-12 h-[100%] bg-white" ref={componentRef}>
                    {gettemplate()}
                </div>
            </div>
        </Layout>
    );
}

export default Template;
