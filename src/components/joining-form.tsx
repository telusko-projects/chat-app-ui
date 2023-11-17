import { useState } from "react";

interface JoiningFormProps {
  userName: string;
  setUserName: (val: string) => void;
}

export const JoiningForm = ({ setUserName }: JoiningFormProps) => {
  const [name, setName] = useState<string>("");
  return (
    <div className="w-full max-w-7xl mx-auto mt-20 min-h-min border border-emerald-600 rounded-md">
      <div className="bg-gradient-to-r from-green-500 to-green-700 h-[100px] w-full text-center py-10 rounded-md">
        <h1 className="text-white font-semibold text-2xl px-10">
          Welcome To Telusko Chat
        </h1>
      </div>
      <div>
        {/* Form To Enter Username */}
        <div className="w-1/2 mx-auto my-20">
          <label
            htmlFor="userName"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Enter Your Username
          </label>
          <div className="mt-2">
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              name="userName"
              id="userName"
              className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="johndoe"
              aria-describedby="username-description"
            />
          </div>
          <p className="mt-2 text-sm text-gray-500" id="username-description">
            We'll only use this for chat.
          </p>
          <button
            onClick={() => setUserName(name)}
            type="button"
            className="w-full mt-4 rounded-md bg-emerald-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
          >
            Join Chat
          </button>
        </div>
      </div>
    </div>
  );
};
