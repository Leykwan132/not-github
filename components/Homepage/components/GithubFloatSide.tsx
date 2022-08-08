import React from "react";
import { AiFillGithub } from "react-icons/ai";

type Props = {};

const GithubFloatSide = (props: Props) => {
  return (
    <div className=" absolute top-[43%] left-0 ml-[-100px] flex min-w-[140px] cursor-pointer flex-col rounded-tr-md rounded-br-md bg-gray-900 text-gray-400 duration-300 ease-in hover:ml-[0px]  hover:bg-black hover:text-white">
      <a
        className="flex items-center justify-between px-2 py-2"
        href="https://github.com/Leykwan132"
        target={"_blank"}
      >
        <p className="text-sm font-semibold">Github</p>
        <AiFillGithub className="h-7 w-7" />
      </a>
    </div>
  );
};

export default GithubFloatSide;
