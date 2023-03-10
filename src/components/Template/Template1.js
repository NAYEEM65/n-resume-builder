import React, { useContext } from "react";
import { useSelector } from "react-redux";

const Template1 = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="py-10 px-5 ">
      <div className="flex justify-between">
        <h1 className="text-4xl uppercase">{user.name}</h1>
        <div className="text-gray-500">
          <p className="text-lg">{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Objective
          </h3>
          <p className="text-sm pt-4 pb-3">{user.carrierObjective}</p>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Eductaion
          </h3>

          <div className="text-sm">
            {user.education?.map((edu, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{edu.passingYear}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Group: </span>
                  <p>{edu.group}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Instituition: </span>
                  <p>{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Experience
          </h3>

          <div className="text-sm">
            {user.experience?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.years}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Place: </span>
                  <p>{exp.place}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Duration: </span>
                  <p>{exp.range}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Projects
          </h3>

          <div className="text-sm">
            {user.projects?.map((exp, index) => (
              <div className="py-2" key={index}>
                <h6>
                  <b>{exp.range}</b>
                </h6>
                <div className="flex justify-start gap-2 py-1">
                  <span>Title: </span>
                  <p>{exp.description}</p>
                </div>
                <div className="flex justify-start gap-2">
                  <span>Link: </span>
                  <a href={exp.link}>{exp.link}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
        <div className="mt-5">
          <h3 className="text-xl py-2 font-bold border-b border-gray-300">
            Skills
          </h3>

          <div className="text-sm flex justify-start gap-3 flex-row flex-wrap">
            {user.skills?.map((exp, index) => (
              <div
                className="p-2 mt-2 rounded border border-dotted border-gray-400"
                key={index}
              >
                <h6>
                  <b>{exp.technology}</b>
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-500 my-4" />
      </div>
    </div>
  );
};

export default Template1;
