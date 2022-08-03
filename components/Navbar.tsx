import Image from "next/image";
import React from "react";
import { BellIcon, PlusIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";

const Navbar = () => {
  return (
    <div className="bg-gray-900 px-4 py-3 flex justify-between">
      {/* Front-part */}
      <div className="flex items-center space-x-4">
        {/* logo */}
        <div className="relative rounded-full w-10 h-10 bg-white cursor-pointer hover:bg-gray-400">
          <Image
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* input */}
        <div>
          <input
            className="rounded-md px-1 py-1 bg-black text-white outline-none border border-gray-700"
            type="text"
          />
        </div>
        <div className="navbar-font">
          <p>Pull requests</p>
        </div>
        <div className="navbar-font">
          <p>Issues</p>
        </div>
        <div className="navbar-font">
          <p>Marketplace</p>
        </div>
        <div className="navbar-font">
          <p>Explore</p>
        </div>
      </div>

      {/* End part */}
      <div className="flex items-center mr-3 space-x-3">
        <div className="cursor-pointer text-white ">
          <BellIcon className="w-6 h-6 hover:text-gray-400" />
        </div>
        <div className="flex items-center cursor-pointer hover:text-gray-400 text-white">
          <PlusIcon className="w-6 h-6 " />
          <ChevronDownIcon className=" w-3 h-3" />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer text-white hover:text-gray-400">
          <div className="relative rounded-full w-7 h-7 bg-white cursor-pointer hover:bg-gray-400">
            <Image
              src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <ChevronDownIcon className=" w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
