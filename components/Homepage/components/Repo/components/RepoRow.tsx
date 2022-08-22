import { StarIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import ReactTimeAgo from "react-time-ago";
type Props = {
  status?: string;
  title?: string;
  description?: string;
  starred?: boolean;
  updatedAt?: string;
  primaryLanguage?: string;
  primaryLanguageColor?: string;
  url?: string;
  isFork?: boolean;
  stargazerCount?: number;
};

const RepoRow = ({
  status = "Done",
  description,
  title,
  url,
  updatedAt,
  primaryLanguage,
  primaryLanguageColor,
  starred,
  isFork,
  stargazerCount,
}: Props) => {
  return (
    <div className="flex flex-col border-t-2 border-b-2 border-gray-800 py-6">
      {/* First row */}
      <div className=" flex justify-between">
        <div className="relative flex">
          <a href={url} target={"_blank"}>
            <p className="cursor-pointer text-lg font-bold text-blue-400 hover:underline">
              {title}{" "}
            </p>
          </a>
          <p
            className={`ml-2 grid cursor-default place-items-center whitespace-nowrap rounded-md border ${
              status === "In-Progress" && "border-yellow-600 text-yellow-200"
            }
              ${status === "Done" && "border-green-600 text-green-200"}

              ${
                status === "On-hold" && "border-red-600 text-red-200"
              } my-1 px-1 text-[10px] `}
          >
            {status}
          </p>
          {isFork && (
            <p
              className={`my-1 ml-2 grid cursor-default place-items-center whitespace-nowrap rounded-md border border-gray-300  px-1 text-[10px] text-gray-300 `}
            >
              Forked
            </p>
          )}
        </div>
      </div>
      {/* Description */}
      <div className="mt-2 text-sm text-gray-400">{description}</div>
      {/* Information */}
      <div className="mt-5 flex space-x-4">
        {/* Language */}
        {primaryLanguage && (
          <div className="flex items-center space-x-1">
            <div
              style={{ backgroundColor: primaryLanguageColor }}
              className="h-3 w-3 rounded-full "
            />
            <p className="text-xs text-gray-400">{primaryLanguage}</p>
          </div>
        )}
        {/* star */}
        {stargazerCount !== 0 && (
          <div className="flex items-center space-x-[2px]">
            <AiOutlineStar className="h-4 w-4 text-gray-400" />
            <p className="text-xs text-gray-400">{stargazerCount}</p>
          </div>
        )}
        {/* Date */}
        <div>
          <p className="text-xs text-gray-400">
            Updated <ReactTimeAgo date={updatedAt} locale="en-US" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default RepoRow;
