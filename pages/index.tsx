import Image from "next/image";
import { useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";

import {
  BookOpenIcon,
  CodeIcon,
  CollectionIcon,
  PuzzleIcon,
  QrcodeIcon,
} from "@heroicons/react/outline";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import CardList from "../components/Homepage/components/CardList";
import LinkedinFloatSide from "../components/Homepage/components/LinkedinFloatSide";
import GithubFloatSide from "../components/Homepage/components/GithubFloatSide";
import PeaceOutFloatSide from "../components/Homepage/components/PeaceOutFloatSide";
import ContributionCalendar from "../components/Homepage/components/ContributionCalendar";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [underlined, setUnderlined] = useState("Overview");
  const handleUnderline = (item: string) => {
    setUnderlined(item);
  };

  return (
    <div className="relative grid grid-cols-3 gap-4 px-5 pt-10 lg:px-28 ">
      {/* Linkedin, Github link */}
      <LinkedinFloatSide />
      <GithubFloatSide />
      <PeaceOutFloatSide />

      {/* Left component */}
      <div className="flex flex-col">
        <Image
          src={session?.user?.image}
          objectFit="contain"
          width="300px"
          height="300px"
        />
        <p className="mt-4 ml-14 truncate text-left text-2xl font-bold text-gray-300">
          Ley Kwan Choo
        </p>
        <p className="ml-14 mt-1 text-left font-sans text-gray-400">
          lchoo2@wisc.edu
        </p>
        <p className="mt-3 ml-14 text-left text-lg text-gray-400">
          Bachelor's in Data Science, Class of 2024
        </p>
        <div className="ml-14 mt-2 flex space-x-4  text-gray-400">
          <div className="flex items-center space-x-1">
            <PuzzleIcon className="h-5 w-5" />
            <p className="font-extrabold text-blue-300">6</p>
            <p>following</p>
          </div>

          <div className="flex items-center space-x-1">
            <QrcodeIcon className="h-5 w-5" />
            <p className="font-extrabold text-yellow-200">9</p>
            <p>following</p>
          </div>
        </div>
        <div className="ml-14 mt-12 flex flex-col text-gray-300">
          <p className="text-md font-sans font-semibold">Built with</p>
          <div className="mt-2 flex space-x-2">
            <div>
              <a href="https://www.typescriptlang.org/" target={"_blank"}>
                <SiTypescript className="built-with-logo  hover:text-blue-500" />
              </a>
            </div>
            <div>
              <a href="https://nextjs.org/" target={"_blank"}>
                <TbBrandNextjs className="built-with-logo  hover:text-slate-400" />
              </a>
            </div>
            <div>
              <a href="https://tailwindcss.com/" target={"_blank"}>
                <SiTailwindcss className="built-with-logo  hover:text-sky-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Right component */}
      <div className="col-span-2 flex flex-col ">
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
        <div className="mt-6 flex flex-col text-gray-400">
          <h1 className="mb-3">Popular repositories</h1>
          {/* CardList component */}
          <CardList />
        </div>
        <p className="mt-6 text-gray-300 ">Total Contribution in 2022</p>
        <ContributionCalendar />
      </div>
    </div>
  );
};

export default Home;
