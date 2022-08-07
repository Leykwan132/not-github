import React from "react";
import { SiTypescript } from "react-icons/si";
import { AiOutlineStar } from "react-icons/ai";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className="flex h-32 cursor-pointer flex-col justify-between rounded-lg border border-gray-700 p-4 ">
      {/* 1st */}
      <div className="flex items-center justify-between">
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
      <div className="min-h-[40px] text-xs">
        {/* Description */}
        <p className="h-4">description</p>
      </div>
      {/* 3rd */}
      <div className="flex space-x-4">
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
    </div>
  );
};

export default Card;
