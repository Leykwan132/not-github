import React from "react";
import { SiTypescript } from "react-icons/si";
import { AiOutlineStar, AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";

type Props = {
  addProject?: boolean;
  status?: string;
};

const Card = ({ addProject, status }: Props) => {
  return (
    <div
      className={`group relative flex h-32 flex-col justify-between rounded-lg border border-gray-700 p-4 duration-300 ease-in  ${
        !addProject &&
        "from-slate-800 to-slate-600 hover:scale-105 hover:bg-gradient-to-r"
      } `}
    >
      {!addProject ? (
        <>
          {/* 1st */}
          <div className="flex items-center justify-between group-hover:hidden">
            {/* title */}
            <p className="text-sm font-extrabold text-blue-400">title 1</p>
            {/* Public logo */}
            <p
              className={`rounded-lg border ${
                status === "In-Progress" && "border-yellow-600 text-yellow-200"
              }
              ${status === "Done" && "border-green-600 text-green-200"}

              ${status === "On-hold" && "border-red-600 text-red-200"}
              border-gray-700 px-2 py-1 text-xs font-semibold`}
            >
              {status}
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
          <div className=" absolute left-[45%] top-[-30%] hidden  group-hover:inline xl:h-[200px] xl:w-[200px] ">
            <Image
              src="https://res.cloudinary.com/dx0kyrggg/image/upload/v1659923721/Screenshot_2022-08-08_at_9.54.57_AM_tzp2kt.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="absolute top-[50%] left-[5%] hidden translate-y-[-55%] group-hover:block">
            <h3 className="mb-2 text-left text-xs tracking-wider text-white">
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
