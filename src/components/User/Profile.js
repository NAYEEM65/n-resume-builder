import React, { useContext, useState } from 'react';
import { Button, Form, message, Tabs } from 'antd';
import axios from 'axios';
import Layout from '../../Layout/Layout';
import PersonalInfo from './Info/PersonalInfo';
import SkillsEducation from './Info/SkillsEducation';
import ExperienceProjects from './Info/Experience';
import { AuthContext } from '../../context/authContext';
import { Loading } from 'notiflix';
import Address from './Info/Address';

function Profile() {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            await axios.post('/api/update-profile', {
                ...values,
                _id: user._id,
            });

            setLoading(false);
            message.success('Profile updated successfully');
        } catch (error) {
            setLoading(false);
            message.error('Registration failed');
        }
    };
    return (
        <Layout>
            {loading ? Loading.arrows() : Loading.remove()}
            <div className="update-profile max-w-[90%] mx-auto">
                <h4>
                    <b>Update Profile</b>
                </h4>
                <hr />
                <Form layout="vertical" onFinish={onFinish} initialValues={user}>
                    <Tabs
                        defaultActiveKey="1"
                        items={[
                            {
                                label: `Personal Info`,
                                key: '1',
                                children: <PersonalInfo />,
                            },
                            {
                                label: `Skills and Education`,
                                key: '2',
                                children: <SkillsEducation />,
                            },
                            {
                                label: `Experience or Projects`,
                                key: '3',
                                children: <ExperienceProjects />,
                            },
                            {
                                label: `Additional Info`,
                                key: '4',
                                children: <Address />,
                            },
                        ]}
                    />

                    <Button htmlType="submit">UPDATE</Button>
                </Form>
            </div>
        </Layout>
    );
}

export default Profile;
