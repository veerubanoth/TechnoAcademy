import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

export default function Login() {

  const [ShowPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <>
      <Navbar />
      <div className='py-4'>
        <section className='grid  justify-items-center '>
          <h1 className='text-3xl text-center font-bold font-Poppins '>
            Log In
          </h1>
          <div>
            <div className='py-4 '>
              <form className='grid font-Poppins'>
                <input type="email" id="email" className=' w-full px-4  font-light text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out '
                  value={email}
                  onChange={onChange}
                  placeholder="Email Address"
                />

                <div className='py-4 mb-6 relative'>
                  <input type={ShowPassword ? "text" : "password"} id="password" className=' w-full px-4  font-light text-xl
                   text-gray-700 bg-white border-gray-300 border-b rounded transition ease-in-out '
                    value={password}
                    onChange={onChange}
                    placeholder="Password"
                  />

                  {ShowPassword ? (
                    <AiFillEyeInvisible className='absolute right-3 top-8 cursor-pointer ' onClick={() => setShowPassword((prevState) => !prevState)} />
                  ) : <AiFillEye className='absolute right-3 top-8 cursor-pointer' onClick={() => setShowPassword((prevState) => !prevState)} />}
                </div>

                <div className='flex font-nomal justify-between font-light' >
                  <p className='text-sm'>Don't have an acoount? check </p>
                  <p className='text-sm'>Forgot password</p>
                </div>

              </form>
            </div>
          </div>
        </section>

      </div>
      <Footer />
    </>

  )
}
