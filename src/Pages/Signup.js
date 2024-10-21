import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    window.location.href = "http://127.0.0.1:2030/auth/google";
  };

  const handleSignIn = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:2030/auth/login', {
        email: emailOrUsername,
        password: password,
        withCredentials: true ,
      });

      // Assuming the API returns a success message or token upon successful login
      if (response.data.success) {
        // You can store the token in local storage or context if needed
        localStorage.setItem('token', response.data.token);

        // Redirect the user to the homepage
        navigate('/');
      } else {
        setError('Invalid login credentials. Please try again.');
      }
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background p-4 px-[550px] py-[100px]">
      <img src="./daft-logo.svg" alt="Daft Logo" className="mb-6 w-20 h-14" />
      <h1 className="text-2xl text-zinc-800">Sign in to continue</h1>
      
      {/* Google Sign-In Button */}
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center justify-around w-full p-3 mt-4 pr-20 bg-white border border-zinc-300 rounded-lg shadow-md hover:shadow-lg transition duration-200"
      >
        <FcGoogle className="text-3xl" />
        <p className="text-xl">Continue with Google</p>
      </button>

      <div className="flex items-center justify-center mt-4">
        <span className="text-zinc-500">or</span>
      </div>

      {/* Show Error Message */}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      
      {/* Email/Username Input */}
      <label className="mt-4 font-semibold">Email or username</label>
      <input
        type="text"
        value={emailOrUsername}
        onChange={(e) => setEmailOrUsername(e.target.value)}
        className="w-full mt-1 p-3 border border-zinc-300 focus:outline-none focus:ring focus:ring-primary"
      />

      {/* Password Input */}
      <label className="mt-4 font-semibold">Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mt-1 p-3 border border-zinc-300 focus:outline-none focus:ring focus:ring-primary"
      />

      {/* Sign-In Button */}
      <button
        onClick={handleSignIn}
        className="w-full mt-4 border border-zinc-300 bg-[#4170c4] text-white rounded-lg p-4 hover:bg-primary/80"
      >
        SIGN IN
      </button>

      <div className="flex justify-between w-full mt-4 text-sm text-zinc-500">
        <Link to="/agent-signin" className="hover:text-primary text-[#4170c4] font-semibold">
          Agent sign in
        </Link>
        <Link to="/forgot-details" className="hover:text-primary text-[#4170c4] font-semibold">
          Forgot your details?
        </Link>
      </div>

      <hr className="mt-9" />

      <div className="mt-6 text-sm text-black flex justify-between">
        <span className="text-2xl">No account yet?</span>
        <Link to="/signup" className="text-primary hover:underline text-[#4170c4] font-semibold">
          Sign up for Daft
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
