"use client"; // Add this line at the top
import React, { useState } from 'react';
import axios from 'axios';
import { createUserWithEmailAndPassword, sendEmailVerification,GoogleAuthProvider,signInWithPopup,updateProfile } from "firebase/auth";
import { auth } from '@/utils/firebase';

const SignUpForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/api/auth/register', {
        email,
        name,
        password,
      });

      setMessage("User registered successfully");
      setError(null);
    } catch (error) {
      setMessage(null);
      setError("User already exists or there was an error registering");
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
    <div className='w-full lg:w-[505px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center my-12 lg:my-[100px] p-6 lg:py-[30px]'>
      <h3 className='text-center text-2xl lg:text-[31px] font-semibold'>Sign up to</h3>
      <span className='pt-2 text-center text-lg lg:text-[16px] font-medium'>Heavenly Lanka Vacations</span>

      <form className='w-full lg:w-[400px] flex flex-col justify-center pt-6 lg:pt-8' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-1'>
          <label className='text-[16px] font-medium'>Email</label>
          <input
            type="email"
            className='h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col gap-1 pt-4'>
          <label className='text-[16px] font-medium'>Name</label>
          <input
            type="text"
            className='h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col gap-1 pt-4'>
          <label className='text-[16px] font-medium'>Password</label>
          <input
            type="password"
            className='h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className='flex flex-col gap-1 pt-4'>
          <label className='text-[16px] font-medium'>Confirm Password</label>
          <input
            type="password"
            className='h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="h-12 lg:h-[62px] text-white bg-gray-800 hover:bg-gray-900 mt-6 lg:mt-8 text-[16px] font-medium rounded-lg cursor-pointer">
          Register
        </button>
      </form>

      {message && <div className="text-orange-500 text-center mt-4">{message}</div>}
      {error && <div className="text-red-500 text-center mt-4">{error}</div>}

      <div className='flex pt-4 text-[16px]'>
        <p className='font-light'>Already have an Account?</p>
        <a className='font-semibold pl-1 cursor-pointer text-blue-600' href='/login'>Log In</a>
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

export default SignUpForm;
