import React from "react";

const SignIn = () => {
  return (
    <div className="text-center text-gray-800 mt-5 h-110 flex justify-center items-center">
      <div className="bg-gray-100 md:py-10 md:px-15 p-5 rounded-2xl border-1">
        <h1 className="text-3xl mb-4">Login below</h1>
        <form action="https://bookmyseat-server.vercel.app/login" method="post">
          <label className="m-2" htmlFor="username">
            Username
          </label>
          <input
            className="border-1 m-2"
            id="username"
            name="username"
            type="text"
          />
          <br />
          <label className="m-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            className="border-1 m-2"
            type="password"
            name="password"
          />
          <br />
          <input
            className="text-white bg-red-500 hover:bg-blue-500 hover:cursor-pointer px-4 py-2 rounded-full m-2"
            type="submit"
            value="Sign in"
          />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
