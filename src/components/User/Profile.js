import React, { useEffect, useState } from "react";
import { Button, Form, message, Tabs } from "antd";
import axios from "axios";
import Layout from "../../Layout/Layout";
import PersonalInfo from "./Info/PersonalInfo";
import SkillsEducation from "./Info/SkillsEducation";
import ExperienceProjects from "./Info/Experience";
import { Loading } from "notiflix";
import Address from "./Info/Address";
import { useSelector } from "react-redux";
import {
  useGetUserDetaileQuery,
  useUpdateUserInfoMutation,
  useUpdateUserMutation,
} from "../../features/auth/autAPI";

function Profile() {
  const [loading, setLoading] = useState(false);
  const { user, token } = useSelector((state) => state.auth);
  const [updateUserInfo] = useUpdateUserInfoMutation();
  const [getUserDetaile, { isLoading, isError }] = useGetUserDetaileQuery();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // await axios.post(
      //   "/api/update-profile",
      //   {
      //     ...values,
      //     _id: user._id,
      //   }
      //   // { headers: "authorization"`Bearer ${token}` }
      // );
      console.log(values);
      const allInfo = {
        ...values,
        _id: user._id,
      };
      updateUserInfo(allInfo);

      setLoading(false);
      message.success("Profile updated successfully");
    } catch (error) {
      setLoading(false);
      message.error("updated  failed");
    }
  };
  // useEffect(() => {
  //   getUserDetaile();
  // }, []);

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
                key: "1",
                children: <PersonalInfo />,
              },
              {
                label: `Skills and Education`,
                key: "2",
                children: <SkillsEducation />,
              },
              {
                label: `Experience or Projects`,
                key: "3",
                children: <ExperienceProjects />,
              },
              {
                label: `Additional Info`,
                key: "4",
                children: <Address />,
              },
            ]}
          />

          <Button htmlType="submit" type="primary" className="bg-blue-500 px-5">
            UPDATE
          </Button>
        </Form>
      </div>
    </Layout>
  );
}

export default Profile;
