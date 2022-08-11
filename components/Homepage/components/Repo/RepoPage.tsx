import { ArrowDownIcon, BookmarkAltIcon } from "@heroicons/react/outline";
import React from "react";

type Props = {};

const RepoPage = (props: Props) => {
  return (
    <div className="mt-5 flex flex-col">
      {/* SearchBar */}
      <div className="flex justify-between">
        {/* 1 input */}
        <input
          type="text"
          className="mr-4 flex-grow rounded-md border border-gray-700 bg-black py-1 px-3 placeholder:text-gray-500 focus:text-gray-300"
          placeholder="Find a repository..."
        />
        {/* 4 button */}
        <div className="flex">
          <div className="flex space-x-1">
            <div className="flex cursor-pointer items-center justify-center space-x-1 rounded-md border border-gray-700 bg-gray-800 px-4 py-1 font-semibold text-gray-300">
              <p className="text-sm">Type</p>
              <ArrowDownIcon className="h-3 w-3" />
            </div>
            <div className="flex cursor-pointer  items-center justify-center space-x-1 rounded-md border border-gray-700 bg-gray-800 px-4 py-1 font-semibold text-gray-300">
              <p className="text-sm">Language</p>
              <ArrowDownIcon className="h-3 w-3" />
            </div>
            <div className="flex cursor-pointer  items-center justify-center space-x-1 rounded-md border border-gray-700 bg-gray-800 px-4 py-1 font-semibold text-gray-300">
              <p className="text-sm">Sort</p>
              <ArrowDownIcon className="h-3 w-3" />
            </div>
          </div>
          <div className="ml-4 flex  cursor-pointer items-center justify-center space-x-1 rounded-md border border-gray-700 bg-green-700 px-4 py-1 font-semibold text-white">
            <BookmarkAltIcon className="h-4 w-4" />
            <p className="text-sm">New</p>
          </div>
        </div>
      </div>
      {/* RepoList */}
    </div>
  );
};

export default RepoPage;
