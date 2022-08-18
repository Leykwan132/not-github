import { StarIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
type Props = {
  status?: string;
};

const RepoRow = ({ status }: Props) => {
  const [starIsClick, setStarIsClick] = useState(false);

  const handleStarClick = () => {
    setStarIsClick(!starIsClick);
  };
  return (
    <div className="flex flex-col border-t-2 border-b-2 border-gray-800 py-6">
      {/* First row */}
      <div className=" flex justify-between">
        <div className="relative flex">
          <a>
            <p className="cursor-pointer text-lg font-bold text-blue-400 hover:underline">
              not-github
            </p>
          </a>
          <p
            className={`ml-2 grid place-items-center whitespace-nowrap rounded-md border  ${
              status === "In-Progress" && "border-yellow-600 text-yellow-200"
            }
              ${status === "Done" && "border-green-600 text-green-200"}

              ${
                status === "On-hold" && "border-red-600 text-red-200"
              } my-1 px-1 text-[10px] `}
          >
            {status}
          </p>
        </div>
        {starIsClick ? (
          <div
            onClick={() => handleStarClick()}
            className="flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-gray-600 bg-gray-800 px-4 py-1"
          >
            <AiFillStar className="h-4 w-4 text-yellow-300" />
            <p className="text-xs font-semibold text-gray-300">Starred</p>
          </div>
        ) : (
          <div
            onClick={() => handleStarClick()}
            className="flex cursor-pointer items-center justify-center space-x-3 rounded-lg border border-gray-600 bg-gray-800 px-4 py-1"
          >
            <AiOutlineStar className="h-4 w-4 text-gray-300" />
            {/* <AiFillStar /> */}
            <p className="text-xs font-semibold text-gray-300">Star</p>
          </div>
        )}
      </div>
      {/* Description */}
      <div className="mt-2 text-sm text-gray-400">Testing description</div>
      {/* Information */}
      <div className="mt-5 flex space-x-4">
        {/* Language */}
        <div className="flex items-center space-x-1">
          <div className="h-3 w-3 rounded-full bg-blue-800" />
          <p className="text-xs text-gray-400">Typescript</p>
        </div>
        {/* star */}
        <div className="flex items-center space-x-[2px]">
          <AiOutlineStar className="h-4 w-4 text-gray-400" />
          <p className="text-xs text-gray-400">2</p>
        </div>
        {/* Date */}
        <div>
          <p className="text-xs text-gray-400">Updated 36 minutes ago</p>
        </div>
      </div>
    </div>
  );
};

export default RepoRow;
