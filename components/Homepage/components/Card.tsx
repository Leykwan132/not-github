import React from "react";
import { SiTypescript, SiJavascript, SiJupyter } from "react-icons/si";
import { AiOutlineStar, AiOutlinePlusCircle } from "react-icons/ai";
import Image from "next/image";

type Props = {
  addProject?: boolean;
  status?: string;
  title?: string;
  description?: string;
  star?: number;
  updatedAt?: string;
  pageScreenshot?: string;
  primaryLanguage?: string;
  primaryLanguageColor?: string;
  url?: string;
  stargazerCount?: number;
};
const Languages = {
  TypeScript: "TypeScript",
  JavaScript: "JavaScript",
  Jupyter: "Jupyter Notebook",
};
const Card = ({
  addProject,
  status,
  title,
  description,
  primaryLanguage,
  primaryLanguageColor,
  url,
  stargazerCount,
}: Props) => {
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
            <p className="truncate text-xs font-extrabold text-blue-400 md:text-sm">
              {title}
            </p>
            {/* Public logo */}
            <p
              className={`hidden rounded-lg border sm:inline ${
                status === "In-Progress" && "border-yellow-600 text-yellow-200"
              }
              ${status === "Done" && "border-green-600 text-green-200"}

              ${status === "On-hold" && "border-red-600 text-red-200"}
              truncate border-gray-700 px-2 py-1 text-xs font-semibold`}
            >
              {status}
            </p>
          </div>
          {/* 2nd */}
          <div className="min-h-[40px] text-xs group-hover:hidden">
            {/* Description */}
            <p className="max-h-[40px] truncate ">{description}</p>
          </div>
          {/* 3rd */}
          <div className="flex space-x-4 group-hover:hidden">
            {/* Language and star */}
            <div className="flex items-center space-x-1">
              {primaryLanguage === Languages.TypeScript && (
                <SiTypescript
                  style={{ color: primaryLanguageColor }}
                  className={`h-3 w-3 `}
                />
              )}
              {primaryLanguage === Languages.JavaScript && (
                <SiJavascript
                  style={{ color: primaryLanguageColor }}
                  className={`h-3 w-3 `}
                />
              )}
              {primaryLanguage === Languages.Jupyter && (
                <SiJupyter
                  style={{ color: primaryLanguageColor }}
                  className={`h-3 w-3 `}
                />
              )}
              <p className="text-xs font-light">{primaryLanguage}</p>
            </div>
            {stargazerCount !== 0 && (
              <div className="flex items-center space-x-1 ">
                <AiOutlineStar className="h-4 w-4 text-yellow-200" />
                <p className="text-xs font-light">{stargazerCount}</p>
              </div>
            )}
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
              {title}
            </h3>
            <div className="flex space-x-2">
              <a href={url} target={"_blank"}>
                <p className="cursor-pointer rounded-md bg-white py-2 px-2 text-center text-xs font-semibold text-gray-700 hover:bg-orange-500 hover:text-white">
                  View Code
                </p>
              </a>
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
