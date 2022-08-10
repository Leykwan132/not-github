import React from "react";
import { BookmarkAltIcon } from "@heroicons/react/outline";
import ProfileRadar from "./ProfileRadar";
type Props = {};

const ActivityOverview = (props: Props) => {
  return (
    <>
      <div className="mt-6 text-gray-300">Activity Overview</div>
      <div className="mt-4 mb-20 flex min-h-[300px] flex-wrap rounded-lg border border-gray-700 p-5">
        <div className="relative flex flex-1 space-x-2 border-r border-gray-700 text-gray-300">
          {/* logo */}
          <BookmarkAltIcon className="mt-1 h-5 w-5 flex-shrink-0 text-gray-400" />
          <div className="pr-7">
            Contributed to{" "}
            <a className="cursor-pointer font-bold text-blue-400 hover:underline">
              Leykwan132/not-github
            </a>
            ,{" "}
            <a className="cursor-pointer font-bold text-blue-400 hover:underline">
              Leykwan132/DataScienceRecap
            </a>
            ,{" "}
            <a className="cursor-pointer font-bold text-blue-400 hover:underline">
              Leykwan132/personal-web
            </a>{" "}
            and 16 other repositories
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center p-2 text-gray-300">
          <ProfileRadar />
        </div>
      </div>
    </>
  );
};

export default ActivityOverview;
