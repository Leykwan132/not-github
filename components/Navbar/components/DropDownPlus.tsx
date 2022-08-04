import React from "react";
import { Transition, Menu } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
const DropDownPlus = () => {
  return (
    <Menu
      as="div"
      className="flex items-center cursor-pointer hover:text-gray-400 text-white relative"
    >
      <Menu.Button className="flex items-center">
        <PlusIcon className="w-6 h-6 " />
        <ChevronDownIcon className=" w-3 h-3" />
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
        <Menu.Items className="bg-gray-900 min-w-[140px] rounded-md py-1 text-gray-400 font-sans font-normal border border-gray-700 text-sm absolute top-5 right-0 flex flex-col items-start ">
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
