import React from "react";
import toast from "react-hot-toast";
import { GiSelfLove } from "react-icons/gi";

type Props = {};

const PeaceOutFloatSide = (props: Props) => {
  const handlePeaceOut = () => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible
            ? "transition-opacity duration-500 ease-out"
            : "animate-pulse"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <img
                className="h-10 w-10 rounded-full"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQFCj0SDPzzVow/profile-displayphoto-shrink_800_800/0/1639179057008?e=1665619200&v=beta&t=ytNgCACVneEI6r81RWQVrIm-J_XG0nJ6Fo3cs-Gu4LA"
                alt=""
              />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">Kwan</p>
              <p className="mt-1 text-sm text-gray-500">
                Thanks for stopping by! Connect with me!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-transparent p-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div className="absolute top-[51%] left-0 ml-[-100px] flex min-w-[140px] cursor-pointer flex-col rounded-tr-md rounded-br-md bg-gray-900 text-gray-400 duration-200 ease-in hover:ml-[0px] hover:bg-red-600 hover:text-white">
      <div
        className="flex items-center justify-between py-2 px-2"
        onClick={() => handlePeaceOut()}
      >
        <p className="text-sm font-semibold">Peace out!</p>
        <GiSelfLove className="h-7 w-7" />
      </div>
    </div>
  );
};

export default PeaceOutFloatSide;
