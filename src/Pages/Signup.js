import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SignIn = () => {
  return (
    <div className="flex flex-col  min-h-screen bg-background p-4 px-[550px] py-[100px]">
      <img
        src="./daft-logo.svg"
        alt="Daft Logo"
        className="mb-6 w-20 h-14"
      />
      <h1 className="text-2xl  text-zinc-800">Sign in to continue</h1>
      <button className="flex items-center justify-around w-full p-3 mt-4 pr-20 bg-white border border-zinc-300 rounded-lg shadow-md hover:shadow-lg transition duration-200">
      <FcGoogle className='text-3xl' />

      <p className='text-xl'>  Continue with Google</p>
      </button>
      <div className="flex items-center justify-center mt-4">
        <span className="text-zinc-500">or</span>
      </div>
      Email or username
      <input
        type="text"
       
        className="w-full mt-1 p-3 border border-zinc-300  focus:outline-none focus:ring focus:ring-primary"
      />
     <p className='mt-4 font-semibold'> Password</p>
      <input
        type="password"
       className="w-full mt-1 p-3 border border-zinc-300  focus:outline-none focus:ring focus:ring-primary"
      />
      <button className="w-full mt-4 border border-zinc-300 bg-[#4170c4] text-white rounded-lg p-4 hover:bg-primary/80">
        SIGN IN
      </button>
      <div className="flex justify-between w-full mt-4 text-sm text-zinc-500">
        <a href="#" className="hover:text-primary text-[#4170c4] font-semibold">Agent sign in</a>
        <a href="#" className="hover:text-primary text-[#4170c4] font-semibold">Forgot your details?</a>
      </div>
      <hr className='mt-9'/>
      <div className="mt-6 text-sm text-black flex justify-between">
        <span className='text-2xl'>No account yet? </span>
        <a href="#" className="text-primary hover:underline text-[#4170c4] font-semibold">Sign up for Daft</a>
      </div>
    </div>
  );
};
export default SignIn;