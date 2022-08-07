import React from "react";
import { SiTypescript } from "react-icons/si";
import { AiOutlineStar, AiOutlinePlusCircle } from "react-icons/ai";

type Props = {
  addProject?: boolean;
};

const Card = ({ addProject }: Props) => {
  return (
    <div
      className={`group relative flex h-32 flex-col justify-between rounded-lg border border-gray-700 p-4 duration-300 ease-in  ${
        !addProject && "hover:scale-105 hover:bg-gray-800"
      } `}
    >
      {!addProject ? (
        <>
          {/* 1st */}
          <div className="flex items-center justify-between group-hover:hidden">
            {/* title */}
            <p className="cursor-pointer text-sm font-extrabold text-blue-400 hover:underline">
              title 1
            </p>
            {/* Public logo */}
            <p className="rounded-lg border border-gray-700 px-2 py-1 text-xs font-semibold">
              Public
            </p>
          </div>
          {/* 2nd */}
          <div className="min-h-[40px] text-xs group-hover:hidden">
            {/* Description */}
            <p className="h-4">description</p>
          </div>
          {/* 3rd */}
          <div className="flex space-x-4 group-hover:hidden">
            {/* Language and star */}
            <div className="flex items-center space-x-1">
              <SiTypescript className="h-3 w-3" />
              <p className="text-xs font-light">Typescript</p>
            </div>
            <div className="flex items-center space-x-1 ">
              <AiOutlineStar className="h-4 w-4 text-yellow-200" />
              <p className="text-xs font-light">1</p>
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute top-[50%] left-[50%] hidden translate-x-[-50%] translate-y-[-55%] group-hover:block">
            <h3 className="mb-2 text-center text-xs tracking-wider text-white">
              Spotify Clone
            </h3>
            <div className="flex space-x-2">
              <p className="cursor-pointer rounded-md bg-white py-2 px-2 text-center text-xs font-semibold text-gray-700 hover:bg-orange-500 hover:text-white">
                View Code
              </p>
              <p className="cursor-pointer rounded-md bg-white py-2 px-2 text-center text-xs font-semibold text-gray-700  hover:bg-orange-500 hover:text-white">
                View Project
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <AiOutlinePlusCircle className="h-12 w-12 cursor-pointer text-gray-700 duration-200 ease-in hover:scale-110 hover:text-green-200" />
        </div>
      )}
    </div>
  );
};

export default Card;
