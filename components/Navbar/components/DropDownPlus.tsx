import React from "react";
import { Transition, Menu } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
const DropDownPlus = () => {
  return (
    <Menu
      as="div"
      className="relative flex cursor-pointer items-center text-white hover:text-gray-400"
    >
      <Menu.Button className="flex items-center">
        <PlusIcon className="h-6 w-6 " />
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
        <Menu.Items className="absolute top-5 right-0 flex min-w-[140px] flex-1 flex-col items-start rounded-md border border-gray-700 bg-gray-900 py-1 font-sans text-sm font-normal text-gray-300 ">
          <Menu.Item>
            {({ active }) => (
              <div
                className={`
        ${active && "bg-blue-500 text-white"}
        w-full px-3 py-1`}
              >
                <p> New repository</p>
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
                <p> Import repository</p>
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
                <p> New gist</p>
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
                <p> New organization</p>
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropDownPlus;
