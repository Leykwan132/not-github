import Image from "next/image";
import { useState } from "react";
import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useQuery } from "@apollo/client";

import { PuzzleIcon, QrcodeIcon } from "@heroicons/react/outline";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

import LinkedinFloatSide from "../components/Homepage/components/LinkedinFloatSide";
import GithubFloatSide from "../components/Homepage/components/GithubFloatSide";
import PeaceOutFloatSide from "../components/Homepage/components/PeaceOutFloatSide";
import HomepageNavigate from "../components/Homepage/components/HomepageNavigate";
import RepoPage from "../components/Homepage/components/Repo/RepoPage";
import Overview from "../components/Homepage/components/Overview/Overview";
import { GET_ALL_USERS } from "../graphql/queries";

const Home: NextPage = () => {
  const { data: session } = useSession();
  const [underlined, setUnderlined] = useState("Overview");
  const handleUnderline = (item: string) => {
    setUnderlined(item);
  };
  const { data, error } = useQuery(GET_ALL_USERS);
  console.log(data);
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
        <p className="ml-14 mt-1 truncate text-left font-sans text-gray-400">
          lchoo2@wisc.edu
        </p>
        <p className="mt-3 ml-14 text-left text-lg text-gray-400">
          Bachelor's in Data Science, Class of 2024
        </p>
        <div className="ml-14 mt-2 flex flex-wrap items-center  text-gray-400">
          <div className="mr-3 flex items-center space-x-1">
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
        <HomepageNavigate
          handleUnderline={handleUnderline}
          underlined={underlined}
        />
        {underlined === "Overview" && (
          <>
            <Overview />
          </>
        )}
        {underlined === "Repo" && (
          <>
            <RepoPage />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
