import {
  BookOpenIcon,
  CodeIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import React from "react";

type Props = {
  handleUnderline: Function;
  underlined: String;
};

const HomepageNavigate = ({ handleUnderline, underlined }: Props) => {
  return (
    <div className="flex items-center space-x-3  border-b border-gray-600 pb-2">
      <div
        onClick={() => handleUnderline("Overview")}
        className="relative flex cursor-pointer items-center space-x-1 rounded-md py-2 px-2 text-sm font-semibold text-gray-400 hover:bg-gray-800"
      >
        <BookOpenIcon className="h-5 w-5" />
        <p>Overview</p>
        <div
          className={`absolute right-[0px] top-[43px] h-[2px] w-full rounded-md bg-orange-500 ${
            underlined == "Overview" ? "block" : "hidden"
          }`}
        />
      </div>

      <div
        onClick={() => handleUnderline("Repo")}
        className="relative flex cursor-pointer items-center space-x-1 rounded-md py-2 px-2 text-sm font-semibold text-gray-400 hover:bg-gray-800"
      >
        <CodeIcon className="h-5 w-5" />
        <p>Repositories</p>
        <div
          className={`absolute right-[0px] top-[43px] h-[2px] w-full rounded-md bg-orange-500 ${
            underlined == "Repo" ? "block" : "hidden"
          }`}
        />{" "}
      </div>
    </div>
  );
};

export default HomepageNavigate;
