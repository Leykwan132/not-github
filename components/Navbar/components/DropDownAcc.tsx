import React from "react";
import { Transition, Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
const DropDownAcc = () => {
  const { data: session } = useSession();
  return (
    <Menu
      as="div"
      className="relative flex cursor-pointer items-center text-white hover:text-gray-400"
    >
      <Menu.Button className="flex items-center">
        <div className="relative h-7 w-7 cursor-pointer rounded-full bg-white hover:bg-gray-400">
          <Image src={session?.user?.image} layout="fill" objectFit="contain" />
        </div>
        <ChevronDownIcon className=" h-3 w-3" />
      </Menu.Button>
      {/* Dropdown Menu code */}
      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-5 right-2 flex min-w-[140px] flex-col items-start divide-y divide-gray-700 rounded-md border border-gray-700 bg-gray-900 py-1 font-sans text-sm font-normal text-gray-300 ">
          <div className="w-full py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                flex flex-col px-3 py-1`}
                >
                  <p> Signed in as</p>
                  <p className="font-bold"> {session?.user?.email}</p>
                </div>
              )}
            </Menu.Item>
          </div>
          <div className="w-full py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p className="w-full">Your Profile</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p>Your repositories</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p>Your codespaces</p>
                </div>
              )}
            </Menu.Item>{" "}
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p>Your projects</p>
                </div>
              )}
            </Menu.Item>{" "}
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p>Your stars</p>
                </div>
              )}
            </Menu.Item>{" "}
            <Menu.Item>
              {({ active }) => (
                <div
                  className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                >
                  <p>Your gists</p>
                </div>
              )}
            </Menu.Item>{" "}
          </div>
          <Menu.Item>
            {({ active }) => (
              <div
                className={`
                ${active && "bg-blue-500 text-white"}
                w-full px-3 py-1`}
                onClick={() => {
                  signOut();
                }}
              >
                <p>Sign out</p>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownAcc;
