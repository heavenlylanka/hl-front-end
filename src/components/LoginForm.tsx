"use client"; // Ensure this is a client component

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Import from next/navigation
import { createUserWithEmailAndPassword, sendEmailVerification,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import { auth } from '@/utils/firebase';
const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
      });

      const token: string = response.data.token;
      localStorage.setItem('token', token);

      // Navigate to profile page
      router.push('/profile'); // Use the router from next/navigation
    } catch (error) {
      setError('Invalid username or password');
    }
  };
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const userCredential = await signInWithPopup(auth, provider);
        console.log(userCredential.user);
    } catch (error) {
        console.error("Google login error:", (error as Error).message);
    }
};

  return (
    <div className='w-full lg:w-[505px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center p-6 lg:p-8 my-12 lg:my-[100px]'>
      <h3 className='text-center text-2xl lg:text-[31px] font-semibold mt-10'>Sign in to</h3>
      <span className='pt-2 text-center text-lg lg:text-[16px] font-medium'>Heavenly Lanka Vacations</span>

      <form className='w-full lg:w-[360px] flex flex-col justify-center pt-6' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-[16px] font-medium'>Email</label>
          <input
            type="email"
            className='h-12 rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col gap-1 pt-4'>
          <label className='text-[16px] font-medium'>Password</label>
          <input
            type="password"
            className='h-12 rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="h-12 text-white bg-black mt-6 border-none text-[16px] font-medium rounded-lg cursor-pointer">
          Login
        </button>
      </form>

      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      <div className='flex pt-4 text-[16px] mb-10'>
        <p className='font-light'>Create an account?</p>
        <a className='font-semibold pl-1 cursor-pointer text-blue-600' href='/signup'>Sign Up</a>
      </div>

      <div className="space-x-6 flex justify-center mt-8">
              <button
                type="button"
                className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center mb-4"
                onClick={handleGoogleLogin}
              >
                <img
                  src="https://img.icons8.com/color/16/000000/google-logo.png"
                  alt="Google icon"
                  className="mr-2"
                />
                Continue with Google
              </button>
      </div>
    </div>
  );
}

export default LoginForm;

