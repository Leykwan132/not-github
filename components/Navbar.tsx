import Image from "next/image";
import React from "react";
import { BellIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import DropDownPlus from "./Navbar/components/DropDownPlus";
import DropDownAcc from "./Navbar/components/DropDownAcc";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-gray-900 px-4 py-3">
      {/* Front-part */}
      <div className="flex items-center space-x-4">
        {/* logo */}
        <div className="relative h-10 w-10 cursor-pointer rounded-full bg-white hover:bg-gray-400">
          <Image
            src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* input */}
        <div>
          <input
            className="rounded-md border border-gray-700 bg-black px-1 py-1 text-white outline-none"
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
      <div className="mr-3 flex items-center space-x-3">
        <div className="cursor-pointer text-white ">
          <BellIcon className="h-6 w-6 hover:text-gray-400" />
        </div>
        <DropDownPlus />

        <DropDownAcc />
      </div>
    </div>
  );
};

export default Navbar;
