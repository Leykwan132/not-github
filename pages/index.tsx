import {
  BookOpenIcon,
  ChartBarIcon,
  CodeIcon,
  CollectionIcon,
} from "@heroicons/react/outline";
import type { NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [underlined, setUnderlined] = useState("Overview");
  const handleUnderline = (item: string) => {
    setUnderlined(item);
  };
  return (
    <div className="grid grid-cols-3 gap-4 px-5 pt-10 lg:px-28 ">
      {/* Left component */}
      <div className="flex flex-col">
        <p className="text-white">123</p>
        {/* <div className="relative h-12 w-12">
          <Image src={session?.user?.image} objectFit="contain" layout="fill" />
        </div> */}
      </div>
      {/* Right component */}
      <div className="col-span-2 flex flex-col border-b border-gray-600 pb-2">
        <div className="flex items-center space-x-3 ">
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
          <div
            onClick={() => handleUnderline("Projects")}
            className="relative flex cursor-pointer items-center space-x-1 rounded-md py-2 px-2 text-sm font-semibold text-gray-400 hover:bg-gray-800"
          >
            <CollectionIcon className="h-5 w-5" />
            <p>Projects</p>
            <div
              className={`absolute right-[0px] top-[43px] h-[2px] w-full rounded-md bg-orange-500 ${
                underlined == "Projects" ? "block" : "hidden"
              }`}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
